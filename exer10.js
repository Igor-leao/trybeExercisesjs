/*Escreva um programa que se inicie com dois valores em duas variáveis diferentes:
 o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto 
 de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender 
 mil desses produtos.

Atente que, sobre o custo do produto, incide um imposto de 20%.

Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus
 valores de entrada seja menor que zero. */
 

let var1=100;
let var2=300;
let var3;
if(var1==0&&var2==0)
 {
    console.log("Erro, algum valor inicial é zero");
 }
 else
 {
    var1=(var1*1.2);
    var3=var2-var1;
    console.log("valor com acrescimo de 20%: "+var1);
    console.log("valor do lucro: "+var3);
   0
 }
 
 
