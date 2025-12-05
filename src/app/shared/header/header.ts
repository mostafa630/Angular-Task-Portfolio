import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  navItems = [
    { label: 'Works', path: '/works' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ];
}
