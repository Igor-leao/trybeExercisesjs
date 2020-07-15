let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
let media=0;
let maior=0;
let menor=numbers[0];
for(let i=0; i<numbers.length; i++)
{
    soma+=numbers[i];
    
    if(numbers[i]<menor){
        menor=numbers[i];
    }
    if(numbers[i]>maior){
        maior=numbers[i];
    }
}
media=soma/numbers.length;
if(media>20){
    console.log("valor maior que 20");
    console.log("maior valor "+maior);
    console.log("menor valor "+menor);
}
else{
    console.log("valor menor igual a 20");
}
console.log("o resultado da soma é: "+media);