import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Carro } from 'src/app/modelos/carro.model';
import { ARREGLO_CARROS } from 'src/app/mocks/carro.mock';
import { Propietario } from 'src/app/modelos/propietario.model';
import { ARREGLO_PROPIETARIOS } from 'src/app/mocks/propietario.mock';

@Component({
  selector: 'app-propietarios-carros',
  templateUrl: './propietarios-carros.component.html',
  styleUrls: ['./propietarios-carros.component.css'],
})
export class PropietariosCarrosComponent implements OnInit {
  public arregloCarros: Carro[];
  public arregloPropietario: Propietario[];
  public propietarioSeleccionado: Propietario;

  constructor(public misRutas: Router) {
    this.arregloCarros = ARREGLO_CARROS;
    this.arregloPropietario = ARREGLO_PROPIETARIOS;
    this.propietarioSeleccionado = this.inicializarPropietario();
  }

  ngOnInit(): void {    
  }

  public inicializarPropietario(): Propietario {
    return new Propietario(0,'','','','','','');
  }

  public seleccionarPropietario(objPropietario: Propietario): void {
    this.propietarioSeleccionado = objPropietario;
    this.misRutas.navigate(['/dash/ownerCar/detail', objPropietario.codigo]);
  }
  public cantidadCarros(objPropietario: Propietario): number {
    let cantidad = 0;
    this.arregloCarros.filter((objCarro)=>{
      if(objCarro.propietario.codigo == objPropietario.codigo){
        cantidad++;
      }
    });
    return cantidad;
  }
}
