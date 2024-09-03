import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Carro } from './../../modelos/carro.model';
import { ARREGLO_CARROS } from './../../mocks/carro.mock';
import { Propietario } from './../../modelos/propietario.model';
import { ARREGLO_PROPIETARIOS } from './../../mocks/propietario.mock';
@Component({
  selector: 'app-propietarios-carros-detalle',
  templateUrl: './propietarios-carros-detalle.component.html',
  styleUrls: ['./propietarios-carros-detalle.component.css'],
})
export class PropietariosCarrosDetalleComponent implements OnInit {
  public carroSeleccionado: Carro;
  public propietarioSeleccionado: Propietario;
  public arregloCarros: Carro[];
  public arregloPropietario: Propietario[];
  public arregloCarroPropietario: Carro[];
  constructor(public route: ActivatedRoute) {
    this.arregloCarros = ARREGLO_CARROS;
    this.arregloPropietario = ARREGLO_PROPIETARIOS;
    this.arregloCarroPropietario = [];
    this.carroSeleccionado = this.inicializarCarro();
    this.propietarioSeleccionado = this.inicializarPropietario();
    this.cargarPropietario();
  }
  ngOnInit(): void {}
  // Métodos obligatorios
  //***********************************************************************
  public inicializarPropietario(): Propietario {
    return new Propietario(0, '', '', '', '', '', '');
  }
  public inicializarCarro(): Carro {
    return new Carro(0, '', '', 0, this.inicializarPropietario(), '', '');
  }
  public seleccionarCarro(objCarro: Carro): void {
    this.carroSeleccionado = objCarro;
  }
  // Lógica del negocio
  //***********************************************************************
  public cargarPropietario(): void {
    this.route.paramMap.subscribe((parametro: ParamMap) => {
      const dato = String(parametro.get('codOwner'));
      const numero = parseFloat(dato);
      this.arregloPropietario.filter((objPropietario) => {
        if (objPropietario.codigo === numero) {
          this.propietarioSeleccionado = objPropietario;
        }
      });
      this.verCarros();
    });
  }
  public verCarros(): void {
    this.carroSeleccionado = this.inicializarCarro();
    this.arregloCarroPropietario = [];
    this.arregloCarros.find((objCarro) => {
      if (objCarro.propietario === this.propietarioSeleccionado) {
        this.arregloCarroPropietario.push(objCarro);
      }
    });
  }
}
