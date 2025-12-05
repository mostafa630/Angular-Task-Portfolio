import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WORKS } from '../../shared/data/works.data';
import { Work } from '../../shared/models/work.interface';

@Component({
  selector: 'app-work-details',
  imports: [CommonModule],
  templateUrl: './work-details.html',
  styleUrl: './work-details.scss',
})
export class WorkDetails implements OnInit {
  work: Work | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.work = WORKS.find(w => w.id === id);
    }
  }
}
