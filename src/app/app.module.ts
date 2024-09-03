import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabeceraComponent } from './dashboard/cabecera/cabecera.component';
import { ContenedorDashComponent } from './dashboard/contenedor-dash/contenedor-dash.component';
import { InicioDashComponent } from './dashboard/inicio-dash/inicio-dash.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CarrosComponent } from './componentes/carros/carros.component';
import { PropietariosComponent } from './componentes/propietarios/propietarios.component';
import { PropietariosCarrosComponent } from './componentes/propietarios-carros/propietarios-carros.component';
import { PropietariosCarrosDetalleComponent } from './componentes/propietarios-carros-detalle/propietarios-carros-detalle.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';



@NgModule({
  declarations: [AppComponent, CabeceraComponent, ContenedorDashComponent, InicioDashComponent, InicioComponent, CarrosComponent, PropietariosComponent, PropietariosCarrosComponent, PropietariosCarrosDetalleComponent, NoEncontradoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
