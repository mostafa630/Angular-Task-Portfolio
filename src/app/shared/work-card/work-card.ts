import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-work-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './work-card.html',
  styleUrl: './work-card.scss',
})
export class WorkCard {
  @Input() id: string = '';
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() year: string = '';
  @Input() tags: string[] = [];
  @Input() description: string = '';
}
