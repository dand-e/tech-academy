import fs from 'fs';
import { promisify } from 'util';

let alunos;
const readFilePromise = promisify(fs.readFile);

/*
//Criando assincronia
//o callback somente será excutado após o readFile ler o arquivo
fs.readFile('./alunos.json', (erro, dados) =>{
  if(erro){
    console.error(erro);
    return;
  }
  alunos = JSON.parse(dados);
});

console.log ('alunos: ', alunos);
*/

/*
//Garantindo a sincronia do callback
fs.readFile('./alunos.json', (erro, dados) =>{
  if(erro){
    console.error(erro);
    return;
  }
  alunos = JSON.parse(dados);
  console.log ('alunos: \n', alunos);
});
*/

//Usando Promises
readFilePromise('./alunos.json').then((dados) => {
  alunos = JSON.parse(dados);
  console.log ('alunos: \n', alunos);
}).catch((error) => {
  console.error(error);
})




