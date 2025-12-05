import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Blog } from './features/blog/blog';
import { Work } from './features/work/work';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'works', component:Work },
  { path: 'blog', component:Blog},
  { path: 'contact', redirectTo: '', pathMatch: 'full' }
];
