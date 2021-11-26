import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { PantLibrosComponent } from './Componentes/pant-libros/pant-libros.component';
import { HistoriaComponent } from './Componentes/historia/historia.component';


const routes: Routes = [
  {path:'', component:AppComponent, pathMatch: 'full'},
  {path:'inicio', component: InicioComponent, pathMatch: 'full'},
  {path: 'pantLibros', component: PantLibrosComponent, pathMatch: 'full'},
  {path: 'historia', component: HistoriaComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
