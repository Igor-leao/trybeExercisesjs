
/*Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop -> diagonals */
console.log("informar a peça do xadrez para saber o movimento");
let var1="bispo";

switch(var1){
    case "peão":
        console.log(var1+" movimento de duas casas inicialmente, o restante só uma casa, captura em diagonal");
        break;
    case "torre":
        console.log(var1+" movimentação e captura em movimento de cruz");
        break;
    case "bispo":
        console.log(var1+" movimentação em captura em forma de x");
        break;
    case "rainha":
        console.log(var1+" movimentação e captura toda a possibilidade de todas as peças");
        break;
    case "rei":
        console.log(var1+" todas as direções dos demais soldados, porém em uma casa");
        break;
    case "cavalo":
        console.log(var1+" movimentação em l duas casas e uma em direção horizontal");
        break;
        

}