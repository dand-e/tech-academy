'use strict'; //cria obrigatoriedade de que seja necessária a declaração de variáreis globalmente

let nome = 'Dan Vi';
//console.log(nome);

class TipoRelacao{
  constructor(){
    this.tipo = 'não mono'
  }
}

// Criação de subclasse a partir da superclasse TipoRelacao
class Pessoa extends TipoRelacao {
  constructor(nome, idade){
    super()
    this.nome = nome;
    this.idade = idade;
  }
}

const Afetos = [];

let afeto1 = new Pessoa('Resna', 31);
let afeto2 = new Pessoa('Jonas', 25);
let afeto3 = new Pessoa('Bruni', 33);
let afeto4 = new Pessoa('Lulu', 31);
let afeto5 = new Pessoa('Luy', 35);
let afeto6 = new Pessoa('Rene', 31);
let afeto7 = new Pessoa('Matthew', 31);
let afeto8 = new Pessoa('Tom', 31);
let afeto9 = new Pessoa('Uarê', 31);
let afeto10 = new Pessoa('Mel', 25);
Afetos.push(afeto1, afeto2, afeto3, afeto4, afeto5, afeto6, afeto7, afeto8, afeto9, afeto10);

let pessoa = new Pessoa('Dallas', 0);
let pessoa2 = new Pessoa('Efemero', 0);
let pessoa1 = new Pessoa('Dyoni', 0);
let pessoa3 = new Pessoa('Kyky', 0);
const Crushes = [ pessoa, pessoa1, pessoa2, pessoa3];

//console.log(Afetos);
//console.log(afeto1);
//console.log(Crushes);

// Declaração de atributos fora do constructor
class Pet {
  especie;
  sexo;
  idade;
  constructor(especie, sexo, idade){
    this.especie = especie;
    this.sexo = sexo;
    this.idade = idade; 
  }
}

let pet = new Pet('felina', 'macho', 11)
//console.log (pet)

class PetName extends Pet{
  nome
  constructor(especie, sexo, idade, nome){
    super(especie, sexo, idade);
    this.nome = nome;
  }
  /*constructor(nome){
    super('felina', 'macho', 11);
    this.nome = nome;
  }*/
}
pet = new PetName('felina', 'macho', 11, 'will')
//console.log (pet)

let quantidadeBanana = 10;
let quantidadeFrutas = 100;

import {Frutas} from './frutas.js';

class Banana extends Frutas{
  static codigo = '#1';
  constructor(quantidade){
    super();
    this.quantidade = quantidade;
  }
  bananasRestantes(){
    return quantidadeBanana-this.quantidade;
  }
}

const bananaPrata = new Banana(9);
console.log(bananaPrata.bananasRestantes());
console.log(bananaPrata.frutasRestantes());
//console.log(Frutas.#frutasRestantesTotais());
console.log (Banana.codigo);
console.log(bananaPrata.codigo);

