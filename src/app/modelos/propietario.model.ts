export class Propietario {
  public codigo: number;
  public documento: string;
  public nombre: string;
  public apellidos: string;
  public telefono: string;
  public nombreFoto: string;
  public fotobase64: string;

  constructor(
    cod: number,
    doc: string,
    nom: string,
    ape: string,
    tel: string,
    nomFot: string,
    fot: string
  ) {
    this.codigo = cod;
    this.documento = doc;
    this.nombre = nom;
    this.apellidos = ape;
    this.telefono = tel;
    this.nombreFoto = nomFot;
    this.fotobase64 = fot;
  }
}
