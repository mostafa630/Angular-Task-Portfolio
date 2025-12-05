import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() variant: 'vertical' | 'horizontal' = 'vertical';
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() date?: string;
  @Input() year?: string;
  @Input() tags?: string[];
  @Input() category?: string;
  @Input() description: string = '';
}
