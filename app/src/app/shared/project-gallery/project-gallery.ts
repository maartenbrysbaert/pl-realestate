import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  DestroyRef,
  computed,
  inject,
  input,
  signal,
  PLATFORM_ID,
  OnInit,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Project } from '../../data/projects';

/**
 * Reimplements the two Squarespace gallery widgets with one component:
 *   - `slideshow` for the homepage (one full-width photo, auto-advancing)
 *   - `grid` for /referenties (three columns of captioned tiles)
 */
@Component({
  selector: 'app-project-gallery',
  imports: [NgOptimizedImage],
  templateUrl: './project-gallery.html',
  styleUrl: './project-gallery.scss',
})
export class ProjectGallery implements OnInit {
  readonly projects = input.required<readonly Project[]>();
  readonly mode = input<'slideshow' | 'grid'>('grid');

  /** Renders the trailing "MORE SOON..." tile. Grid mode only. */
  readonly showPlaceholder = input(false);

  private readonly destroyRef = inject(DestroyRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  protected readonly index = signal(0);
  protected readonly current = computed(() => this.projects()[this.index()]);

  /**
   * Indices whose `<img>` is actually rendered. Every slide sits stacked in the
   * viewport, so `loading="lazy"` does not defer any of them - without this the
   * homepage pulled all 43 photos on load, about 7.7 MB.
   *
   * The window is the previous, current and next slide: the previous one has to
   * stay mounted for the duration of the cross-fade, and the next is mounted so
   * it is decoded before it is shown.
   */
  protected readonly mounted = computed(() => {
    const total = this.projects().length;
    const i = this.index();
    return new Set([(i - 1 + total) % total, i, (i + 1) % total]);
  });

  private static readonly INTERVAL_MS = 6000;

  ngOnInit(): void {
    if (this.mode() !== 'slideshow' || !this.isBrowser) return;

    // Honour the user's motion preference - an auto-advancing hero is exactly
    // the kind of thing prefers-reduced-motion exists for.
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = setInterval(() => this.next(), ProjectGallery.INTERVAL_MS);
    this.destroyRef.onDestroy(() => clearInterval(timer));
  }

  protected next(): void {
    this.index.update((i) => (i + 1) % this.projects().length);
  }

  protected previous(): void {
    this.index.update((i) => (i - 1 + this.projects().length) % this.projects().length);
  }

  protected goTo(i: number): void {
    this.index.set(i);
  }

  /** `location : status`, matching the original captions. */
  protected caption(project: Project): string {
    return project.status ? `${project.location} : ${project.status}` : project.location;
  }

  /**
   * The width in the path is a starting point only - the image loader rewrites
   * it for each entry in `ngSrcset`.
   */
  protected src(project: Project, preferred: number): string {
    const closest = project.widths.reduce((best, w) =>
      Math.abs(w - preferred) < Math.abs(best - preferred) ? w : best,
    );
    return `/img/projects/${project.slug}-${closest}.webp`;
  }

  /** NgOptimizedImage wants bare widths here, not URLs; it builds those itself. */
  protected srcset(project: Project): string {
    return project.widths.map((w) => `${w}w`).join(', ');
  }

  /**
   * Full-URL srcset for the grid, which uses a plain `<img>`.
   *
   * NgOptimizedImage unconditionally prepends `auto` to `sizes` on lazy images.
   * Chrome's preload scanner runs before layout, where `sizes: auto` falls back
   * to 100vw — so every tile was fetched twice, once at 1200w from the scanner
   * and again at 480w after layout. That is 47 wasted requests on /referenties.
   */
  protected srcsetUrls(project: Project): string {
    return project.widths.map((w) => `/img/projects/${project.slug}-${w}.webp ${w}w`).join(', ');
  }
}
