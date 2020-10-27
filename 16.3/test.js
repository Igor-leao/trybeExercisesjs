const itemPrimario = [1, 2, 3, 4, 5];
let mutacaoTeste = itemPrimario;
mutacaoTeste.push(6);
console.log(mutacaoTeste); // [1, 2, 3, 4, 5, 6]
console.log(itemPrimario); // [1, 2, 3, 4, 5, 6]
console.log("--------------------------teste dois ----------------------")
const itemPrimario1 = [1, 2, 3, 4, 5];
let clonagemTeste = itemPrimario1;
console.log(clonagemTeste.concat(6));
console.log(clonagemTeste); // [1, 2, 3, 4, 5]
console.log(itemPrimario1); // [1, 2, 3, 4, 5]
