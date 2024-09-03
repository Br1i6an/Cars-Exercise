import { Propietario } from './propietario.model';
export class Carro {
  public codigo: number;
  public placa: string;
  public marca: string;
  public modelo: number;
  public propietario: Propietario;
  public nombreFoto: string;
  public fotobase64: string;
  
  constructor(
    cod: number,
    pla: string,
    mar: string,
    mod: number,
    pro: Propietario,
    nom: string,
    bas: string
  ) {
    this.codigo = cod;
    this.placa = pla;
    this.marca = mar;
    this.modelo = mod;
    this.propietario = pro;
    this.nombreFoto = nom;
    this.fotobase64 = bas;
  }
}
