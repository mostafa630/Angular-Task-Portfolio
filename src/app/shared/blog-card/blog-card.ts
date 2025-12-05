import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  imports: [],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.scss',
})
export class BlogCard {
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() tags: string[] = [];
  @Input() description: string = '';
}
