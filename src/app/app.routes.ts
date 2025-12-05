import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Blog } from './features/blog/blog';
import { Work } from './features/work/work';
import { WorkDetails } from './features/work-details/work-details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'works', component: Work },
  { path: 'works/:id', component: WorkDetails },
  { path: 'blog', component: Blog },
  { path: 'contact', redirectTo: '', pathMatch: 'full' }
];
