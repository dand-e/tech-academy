export class Frutas{
  quantidadeFrutas = 50;
  #quantidadeTotal = 80;
  constructor(quantidadeFrutas, quantidadeTotal){
    this.quantidadeFrutas = quantidadeFrutas;
    this.#quantidadeTotal = quantidadeTotal;
  }
  frutasRestantes(){
    return quantidadeFrutas - this.quantidadeFrutas;
  }
  #frutasRestantesTotais(){
    return this.#quantidadeTotal - this.quantidadeFrutas;
  }
}