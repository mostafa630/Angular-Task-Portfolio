import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'works', redirectTo: '', pathMatch: 'full' },
  { path: 'blog', redirectTo: '', pathMatch: 'full' },
  { path: 'contact', redirectTo: '', pathMatch: 'full' }
];
