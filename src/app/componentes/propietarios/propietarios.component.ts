import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Carro } from './../../modelos/carro.model';
import { ARREGLO_CARROS } from './../../mocks/carro.mock';
import { Propietario } from './../../modelos/propietario.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { mostrarMensaje } from './../../utilidades/mensajes.func';
import { ARREGLO_PROPIETARIOS } from './../../mocks/propietario.mock';
@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  styleUrls: ['./propietarios.component.css'],
})
export class PropietariosComponent implements OnInit {
  public propietarioSeleccionado: Propietario;
  public arregloPropietario: Propietario[];
  public arregloCarros: Carro[];
  public modalRef: BsModalRef;
  public modalTitulo: string;
  public modalCuerpo: string;
  public modalContenido: string;
  public tmpBase64: any;
  constructor(public miModal: BsModalService, public miMensaje: ToastrService) {
    this.propietarioSeleccionado = this.inicializarPropietario();
    this.arregloPropietario = ARREGLO_PROPIETARIOS;
    this.arregloCarros = ARREGLO_CARROS;
    this.modalRef = this.tmpBase64;
    this.modalTitulo = '';
    this.modalCuerpo = '';
    this.modalContenido = '';
    this.tmpBase64 = null;
  }
  ngOnInit(): void {}
  // Métodos obligatorios
  // ***********************************************************************
  public inicializarPropietario(): Propietario {
    return new Propietario(0, '', '', '', '', '', '');
  }
  public seleccionarPropietario(objPropietario: Propietario): void {
    this.propietarioSeleccionado = objPropietario;
  }
  public resetearPropietario(): void {
    this.propietarioSeleccionado = this.inicializarPropietario();
  }
  public validarCampos(): boolean {
    if (
      this.propietarioSeleccionado.nombre == '' ||
      this.propietarioSeleccionado.telefono == '' ||
      this.propietarioSeleccionado.apellidos == '' ||
      this.propietarioSeleccionado.documento == ''
    ) {
      return false;
    }
    return true;
  }
  // Lógica del negocio
  // ***********************************************************************
  public tieneCarro(objPropietario: Propietario): boolean {
    let temporal = false;
    this.arregloCarros.filter((objCarro) => {
      if (objCarro.propietario.codigo == objPropietario.codigo) {
        temporal = true;
      }
    });
    43;
    return temporal;
  }
  public agregarPropietario(): void {
    if (this.validarCampos()) {
      this.propietarioSeleccionado.codigo = this.arregloPropietario.length + 1;
      this.arregloPropietario.push(this.propietarioSeleccionado);
    } else {
      mostrarMensaje(
        'error',
        'No se pueden crear Propietarios<br />con campos vacíos',
        'Advertencia',
        this.miMensaje
      );
    }
  }
  public actualizarPropietario(): void {
    if (this.validarCampos()) {
      this.resetearPropietario();
    } else {
      mostrarMensaje(
        'warning',
        'No se pueden actualizar Propietarios<br />con campos vacíos',
        'Advertencia',
        this.miMensaje
      );
    }
  }
  public borrarPropietario(objPropietario: Propietario): void {
    let pos = 0;
    this.arregloPropietario.forEach(function (dato, indice, arreglo) {
      if (arreglo[indice] === objPropietario) {
        pos = indice;
      }
    });
    this.arregloPropietario.splice(pos, 1);
    this.resetearPropietario();
  }
  // Manejo input de la imagen
  //***********************************************************************
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
      this.propietarioSeleccionado.fotobase64 = this.tmpBase64;
      this.propietarioSeleccionado.nombreFoto = caja.name;
    };
  }
  // Gestión de la ventana flotante
  // ***********************************************************************
  public abrirModal(
    plantilla: TemplateRef<any>,
    objPropietario: Propietario
  ): void {
    44;
    this.propietarioSeleccionado = objPropietario;
    this.modalRef = this.miModal.show(plantilla, { class: 'modal-md' });
    this.modalTitulo = 'Advertencia';
    this.modalCuerpo = '¿Realmente quiere eliminar el propietario?';
    this.modalContenido =
      objPropietario.nombre + ' ' + objPropietario.apellidos;
  }
  public btnCancelar(): void {
    this.modalRef.hide();
  }
  public btnEliminar(): void {
    this.borrarPropietario(this.propietarioSeleccionado);
    this.btnCancelar();
  }
}
