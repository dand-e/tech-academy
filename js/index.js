document.querySelector('#p1').textContent = 'Esse é um texto adicionado a partir do JS externo';

function bemVinde(){
  const nome = prompt('Qual é o seu nome?');
  alert(`Que bom ter você aqui ${nome}! \n Vamos começar?`)
}

function bemVindo(){
  const nomeCompleto = document.getElementById('nome').value;
  alert(`Olá ${nomeCompleto}! Seja bem-vinde`);
  document.getElementById('formularioLogin').style.display = 'none';
}

function mudaFundo(){
  const menu = document.querySelector('#coresFundo');
  const cor = menu.options[menu.selectedIndex].value;
  document.body.style.background = cor;
}

bemVinde();

