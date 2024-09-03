import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Carro } from './../../modelos/carro.model';
import { ARREGLO_CARROS } from './../../mocks/carro.mock';
import { Propietario } from './../../modelos/propietario.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { mostrarMensaje } from 'src/app/utilidades/mensajes.func';
import { ARREGLO_PROPIETARIOS } from './../../mocks/propietario.mock';
@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css'],
})
export class CarrosComponent implements OnInit {
  public carroSeleccionado: Carro;
  public arregloCarros: Carro[];
  public arregloPropietario: Propietario[];
  public modalRef: BsModalRef;
  public modalTitulo: string;
  public modalCuerpo: string;
  public modalContenido: string;
  public tmpBase64: any;
  constructor(public miModal: BsModalService, public miMensaje: ToastrService) {
    this.carroSeleccionado = this.inicializarCarro();
    this.arregloPropietario = ARREGLO_PROPIETARIOS;
    this.arregloCarros = ARREGLO_CARROS;
    this.tmpBase64 = null;
    this.modalRef = this.tmpBase64;
    this.modalTitulo = '';
    this.modalCuerpo = '';
    this.modalContenido = '';
  }
  ngOnInit(): void {
    this.inicializarCombo();
  }
  // Métodos obligatorios
  // ***********************************************************************
  public inicializarCarro(): Carro {
    return new Carro(0, '', '', 0, this.inicializarPropietario(), '', '');
  }
  public inicializarPropietario(): Propietario {
    return new Propietario(0, '', '', '', '', '', '');
  }
  public inicializarCombo(): void {
    this.carroSeleccionado.propietario = ARREGLO_PROPIETARIOS[0];
  }
  public seleccionarCarro(objCarro: Carro): void {
    this.carroSeleccionado = objCarro;
  }
  public resetearCarro(): void {
    this.carroSeleccionado = this.inicializarCarro();
    this.inicializarCombo();
  }
  public datosValidos(): boolean {
    var bandera = true;
    if (
      this.carroSeleccionado.placa == '' ||
      this.carroSeleccionado.marca == '' ||
      this.carroSeleccionado.modelo == 0 ||
      this.carroSeleccionado.propietario.codigo == 0
    ) {
      bandera = false;
    }
    return bandera;
  }
  // Lógica del negocio
  // ***********************************************************************
  public borrarCarro(objCarro: Carro): void {
    let pos = 0;
    this.arregloCarros.forEach(function (dato, indice, arreglo) {
      if (arreglo[indice] === objCarro) {
        pos = indice;
      }
    });
    this.arregloCarros.splice(pos, 1);
    this.resetearCarro();
    mostrarMensaje(
      'success',
      'Eliminado',
      '',
      this.miMensaje
    );
  }
  public agregarCarro(): void {
    if (this.datosValidos()) {
      this.carroSeleccionado.codigo = this.arregloCarros.length + 1;
      this.arregloCarros.push(this.carroSeleccionado);
      mostrarMensaje(
        'success',
        'Creado',
        'Advertencia',
        this.miMensaje
      );
    } else {
      mostrarMensaje(
        'error',
        'No se pueden crear Carros<br />con campos vacíos',
        'Advertencia',
        this.miMensaje
      );
    }
  }
  public actualizarCarro(): void {
    if (this.datosValidos()) {
      this.resetearCarro();
    } else {
      mostrarMensaje(
        'warning',
        'No se pueden actualizar Carros<br />con campos vacíos',
        'Advertencia',
        this.miMensaje
      );
    }
  }
  // Manejo input de la imagen
  // ***********************************************************************
  public seleccionarFoto(objeto: any): any {
    let caja = objeto.target.files[0];
    if (!caja || caja.length == 0) {
      return;
    }
    if (caja.type.match(/image\/*/) == null) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(caja);
    reader.onload = () => {
      this.tmpBase64 = reader.result;
      this.carroSeleccionado.nombreFoto = caja.name;
      this.carroSeleccionado.fotobase64 = this.tmpBase64;
    };
  }
  // Gestión de la ventana flotante
  // ***********************************************************************
  public abrirModal(plantilla: TemplateRef<any>, objCarro: Carro): void {
    this.carroSeleccionado = objCarro;
    this.modalRef = this.miModal.show(plantilla, { class: 'modal-md' });
    this.modalTitulo = 'Advertencia';
    this.modalCuerpo = '¿Realmente quiere eliminar el carro?';
    this.modalContenido = objCarro.marca + ' ' + objCarro.placa;
  }
  public btnCancelar(): void {
    this.modalRef.hide();
  }
  public btnEliminar(): void {
    this.borrarCarro(this.carroSeleccionado);
    this.btnCancelar();
  }
}
