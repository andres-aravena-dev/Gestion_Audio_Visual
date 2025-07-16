import { Routes } from '@angular/router';
import { MenuLateral } from './components/menu-lateral/menu-lateral.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import {SeriesComponent } from './pages/series/series.component';
import { DocumentalesComponent } from './pages/documentales/documentales.component';


export const routes: Routes = [
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'documentales', component: DocumentalesComponent },
  { path: '', redirectTo: 'peliculas', pathMatch: 'full' },
  { path: '**', redirectTo: 'peliculas' },
];