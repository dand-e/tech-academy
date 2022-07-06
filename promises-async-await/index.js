import fetch from 'node-fetch';

/*
//Promises com uso de fetch e then
function main(){
  console.log('main()');
  const user = 'rprrafa';
  const apiUrl = 'https://api.github.com';
  fetch(`${apiUrl}/users/${user}`)
    .then((response) =>{
      return response.json();
    }).then((user) =>{
        console.log(user);
    })
};
*/

/*
//Promises com async-await
async function main(){
  const user = 'rprrafa';
  const apiUrl = 'https://api.github.com';
  const response = await fetch(`${apiUrl}/users/${user}`);
  const githubUser = await response.json();
  console.log (githubUser.name);
};

main();
*/

//Paralelismo
async function main(){
  const user = 'rprrafa';
  const user2 = 'jorgefelipecunha';
  const apiUrl = 'https://api.github.com';
  const promiseRafa = fetch(`${apiUrl}/users/${user}`);
  const promiseJorge = fetch(`${apiUrl}/users/${user2}`);
  const promises = await Promise.all([promiseRafa, promiseJorge]);
  const githubUser = await promises[0].json();
  const githubUser2 = await promises[1].json();
  console.log (`Rafa ID: \n\t${githubUser.id}`);
  console.log (`Jorge ID: \n\t${githubUser2.id}`);
};

main();