import { Routes } from '@angular/router';
import { Color } from './color/color';
import { Ttc } from './ttc/ttc';

export const routes: Routes = [{ path: '', redirectTo: 'color', pathMatch: 'full' },
  { path: 'color', component: Color },
  { path: 'ttc', component: Ttc },
  // Les autres membres ajouteront leurs routes ici
];