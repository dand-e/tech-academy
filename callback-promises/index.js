/*
//Criando assincronia
const mensagemGabriel = () => {
  setTimeout(() => {
    console.log('Bebam água!');
  }, 0);
}

const mensagemRafael = () => {
  console.log ('Hidratado. Bora pra cima!');
}

mensagemGabriel();
mensagemRafael();
*/

/*
//Usando callback (mensagemRafael) para resolver assincronia
const mensagemGabriel = (callback) => {
  setTimeout(() => {
    console.log('Bebam água!');
    return callback();
  }, 0);
}

const mensagemRafael = () => {
  console.log ('Hidratado. Bora pra cima!');
}

mensagemGabriel(mensagemRafael);
*/

//Usando promises no lugar de callback
const mensagemGabriel = () => {
  const promiseMensagemGabriel = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bebam água!');
      resolve();
    }, 0);
  });
  return promiseMensagemGabriel;
};

const mensagemRafael = () => {
  console.log ('Hidratado. Bora pra cima!');
}

mensagemGabriel().then(mensagemRafael);

