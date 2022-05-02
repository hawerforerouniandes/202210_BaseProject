
export class Vehicle {
  id: number;
  marca: string;
  linea: string;
  modelo: string;
  referencia: string;
  kilometraje: string;
  color: string;
  imagen: string;

  constructor(
    id: number,
    marca: string,
    linea: string,
    modelo: string,
    referencia: string,
    kilometraje: string,
    color: string,
    imagen: string,

  ) {
    this.id = id;
    this.marca = marca;
    this.linea = linea;
    this.modelo = modelo;
    this.referencia = referencia;
    this.kilometraje = kilometraje;
    this.color = color;
    this.imagen = imagen;
  }
 }
