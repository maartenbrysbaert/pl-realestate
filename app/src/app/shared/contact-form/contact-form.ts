import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

type SubmitState = 'idle' | 'sending' | 'sent' | 'error';

/** Registered form name. Must match the form in `public/__forms.html`. */
const FORM_NAME = 'contact';

/**
 * Netlify discovers forms by scanning the deployed HTML at build time. Angular
 * renders this one, and even though the page is prerendered, hydration replaces
 * the DOM - so the registration lives in a static `public/__forms.html` file and
 * this component posts to it directly.
 *
 * The body must be URL-encoded and must carry `form-name`; Netlify rejects JSON.
 */
@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  private readonly fb = inject(FormBuilder);

  protected readonly state = signal<SubmitState>('idle');

  protected readonly form = this.fb.nonNullable.group({
    naam: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    onderwerp: [''],
    bericht: ['', Validators.required],
    // Honeypot: hidden from users, so anything in it is a bot. Netlify drops
    // these submissions when the field is declared via data-netlify-honeypot.
    'bot-field': [''],
  });

  protected async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.state.set('sending');

    const body = new URLSearchParams({
      'form-name': FORM_NAME,
      ...this.form.getRawValue(),
    });

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (!response.ok) throw new Error(`Netlify returned ${response.status}`);

      this.state.set('sent');
      this.form.reset();
    } catch {
      this.state.set('error');
    }
  }

  protected invalid(field: string): boolean {
    const control = this.form.get(field);
    return !!control && control.invalid && control.touched;
  }
}
