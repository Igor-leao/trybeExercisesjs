    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  //Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
  return names.reduce((acumulador, currentvalue) => (
   acumulador + currentvalue.toLowerCase().split('a').length - 1
    ), 0);
}
console.log("valor de acc", containsA());
assert.deepEqual(containsA(), 20);