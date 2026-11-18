
import { Routes } from '@angular/router';
import { Color } from './color/color';
import { Ttc } from './ttc/ttc';
import { MiniWord } from './mini-word/mini-word';
import { Rainbow } from './rainbow/rainbow';

export const routes: Routes = [
  { path: '', redirectTo: 'color', pathMatch: 'full' },
  { path: 'color', component: Color },
  { path: 'ttc', component: Ttc },
  { path: 'mini-word', component: MiniWord },
  { path: 'rainbow', component: Rainbow },
  // Les autres membres ajouteront leurs routes ici
];
