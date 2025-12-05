import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: 'assets/icons/fb.svg' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'assets/icons/insta.svg' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'assets/icons/twitter.svg' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'assets/icons/linkedin.svg' }
  ];
}
