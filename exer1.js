let num1, num2, comp;
console.log("informe os dois valores para a operação");
num1 = prompt ("digite o primeiro valor:");
num2 = prompt ("digite o segundo valor:");
comp = prompt ("Agora 1 para adição, 2 para subtração, 3 para divisão e 4 para multiplicação:");

switch (comp){
    case 1:{
        alert(num1+num2);
        break;
    }
    case 2:{
        alert(num1-num2);
        break;
    }
    case 3:{
        alert(num1/num2);
        break;
    }
    case 4:{
        alert(num1*num2);
        break;
    }
    default:{
        alert:("não encontrado valor");
        break;
    }
}
