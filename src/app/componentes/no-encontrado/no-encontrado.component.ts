import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-no-encontrado',
  templateUrl: './no-encontrado.component.html',
  styleUrls: ['./no-encontrado.component.css'],
})
export class NoEncontradoComponent implements OnInit {
  constructor(private destino: Location) {}
  public regresar(): void {
    this.destino.back();
  }
  ngOnInit(): void {}
}
