import { Routes } from '@angular/router';
import { ButtonListComponent } from '../button-list/button-list.component';
import { ContentComponent } from '../page-content/page-content.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/button-list', pathMatch: 'full' },
  {
    path: 'button-list',
    component: ButtonListComponent,
  },
  { path: 'content', component: ContentComponent },
  { path: '**', component: PageNotFoundComponent },
];
