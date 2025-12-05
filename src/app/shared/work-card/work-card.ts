import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-card',
  imports: [CommonModule],
  templateUrl: './work-card.html',
  styleUrl: './work-card.scss',
})
export class WorkCard {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() year: string = '';
  @Input() tags: string[] = [];
  @Input() description: string = '';
}
