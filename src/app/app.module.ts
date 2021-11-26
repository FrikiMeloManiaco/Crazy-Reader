import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { MenuComponent } from './Componentes/menu/menu.component';
import { TabCatPopComponent } from './Componentes/Tablas/tab-cat-pop/tab-cat-pop.component';
import { TabLibModComponent } from './Componentes/Tablas/tab-lib-mod/tab-lib-mod.component';
import { PantLibrosComponent } from './Componentes/pant-libros/pant-libros.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { HistoriaComponent } from './Componentes/historia/historia.component';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TabCatPopComponent,
    TabLibModComponent,
    PantLibrosComponent,
    InicioComponent,
    HistoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
