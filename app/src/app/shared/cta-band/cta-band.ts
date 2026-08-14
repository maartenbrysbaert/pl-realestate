import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialLinks } from '../social-links/social-links';

/** Navy "Samen aan de slag?" band that closes /over and /referenties. */
@Component({
  selector: 'app-cta-band',
  imports: [RouterLink, SocialLinks],
  templateUrl: './cta-band.html',
  styleUrl: './cta-band.scss',
})
export class CtaBand {}
