import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Blog } from './features/blog/blog';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'works', redirectTo: '', pathMatch: 'full' },
  { path: 'blog', component:Blog},
  { path: 'contact', redirectTo: '', pathMatch: 'full' }
];
