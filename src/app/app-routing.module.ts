import { PropietariosCarrosDetalleComponent } from './componentes/propietarios-carros-detalle/propietarios-carros-detalle.component';
import { PropietariosCarrosComponent } from './componentes/propietarios-carros/propietarios-carros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosComponent } from './componentes/carros/carros.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { InicioDashComponent } from './dashboard/inicio-dash/inicio-dash.component';
import { PropietariosComponent } from './componentes/propietarios/propietarios.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { ContenedorDashComponent } from './dashboard/contenedor-dash/contenedor-dash.component';

const routes: Routes = [
{ path: 'home', component: InicioComponent },
{
path: 'dash', component: ContenedorDashComponent,
children: [
{ path: 'root', component: InicioDashComponent },
{ path: 'car', component: CarrosComponent },
{ path: 'owner', component: PropietariosComponent },
{
path: 'ownerCar', component: PropietariosCarrosComponent,
children: [
{ path: 'detail/:codOwner', component: PropietariosCarrosDetalleComponent },
{ path: '', component: PropietariosCarrosDetalleComponent }
]
},
{ path: '', redirectTo: 'root', pathMatch: 'full' },
{ path: '**', component: NoEncontradoComponent }
]
},
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: '**', component: NoEncontradoComponent }
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }