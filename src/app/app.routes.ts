import { Routes } from '@angular/router';

import { ExtratoPolpancaComponent } from './extrato-polpanca/extrato-polpanca.component';
import { HomeComponent } from './home/home.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'extrato-polpanca', component: ExtratoPolpancaComponent },
];

