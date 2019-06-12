import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeleccionSorteoComponent } from './components/seleccion-sorteo/seleccion-sorteo.component';
import { SerieComponent } from './components/serie/serie.component';

const routes: Routes = [
  
  { path: 'series', component: SerieComponent },
  { path: 'seleccionSorteo', component: SeleccionSorteoComponent },
  { path: '**', redirectTo: 'series'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }