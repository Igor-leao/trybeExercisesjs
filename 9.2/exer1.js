// const API_URL = 'https://icanhazdadjoke.com/';
// const fetch = require('node-fetch');
// //const param = { headers: { Accept: 'application/json' } };

// const myObject = {
//   method: 'GET',
//   headers: { 'Accept': 'application/json' }
// };

// fetch(API_URL, myObject)
// .then((respose) => console.log(respose));
// const fetchJoke = () => {
//   // Adicionar lógica aqui!

// };

// window.onload = () => fetchJoke();
const fetch = require('node-fetch');
const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = () => {
  fetch(API_URL, myObject)
  .then(response => console.log(response))
  window.alert("again");
  
};

  
window.onload = () => fetchJoke();
