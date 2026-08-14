import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
import { Provider } from '@angular/core';

/**
 * Images are pre-generated at fixed widths by tools/process-images.mjs, with the
 * width baked into the filename (`sint-martens-latem-sold-800.webp`). There is
 * no resizing CDN, so the loader just swaps the width segment.
 *
 * `ngSrc` always carries a concrete width, which is what gets used when Angular
 * asks for a plain `src` with no width of its own.
 */
export function provideProjectImageLoader(): Provider {
  return {
    provide: IMAGE_LOADER,
    useValue: ({ src, width }: ImageLoaderConfig) =>
      width ? src.replace(/-\d+(\.\w+)$/, `-${width}$1`) : src,
  };
}
