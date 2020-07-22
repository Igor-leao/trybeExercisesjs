/*Imprima no console uma mensagem de boas-vindas para a 
personagem acima, incluindo seu nome. 
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
  
  
  console.log("Bem-vinda, "+info.personagem); */
  function splitSentence(vet) {
    
    let array_2=[vet.length];
    console.log(vet);
  for(let i=0; i<vet.length; i+=0){
    if(vet[i]% 3===0){
     array_2[i]="fizz";
     console.log("fizz");
    }
    if(vet[i]% 5===0){
      array_2[i]="buz";
      console.log("buzz");
    }
    if(vet[i]% 5===0 && vet[i]%3===0){
      array_2[i]="fizzbuz";
      console.log("fizzbuz");
    }
    else{
      array_2[i]="!bug";
      console.log("!bug");
    }
    
  }
   
  }
  let array_1=[2, 15, 7, 9, 45];
  console.log(splitSentence(array_1));
  