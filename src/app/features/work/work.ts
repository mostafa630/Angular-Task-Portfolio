import { Component } from '@angular/core';
import { WorkCard } from '../../shared/work-card/work-card';
import { WORKS } from '../../shared/data/works.data';

@Component({
  selector: 'app-work',
  imports: [WorkCard],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work {
  featuredWorks = WORKS;
}
