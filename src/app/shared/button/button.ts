import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() text: string = '';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
}
