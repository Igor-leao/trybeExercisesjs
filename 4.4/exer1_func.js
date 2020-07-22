let word="axaa";
let awnser;
awnser=palindromo(word);
console.log(awnser);
function palindromo(word){
    let cont=0; 
    let ver=0;
    
for(let i=0;i<word.length;i+=1){
    
    console.log(word[i]+word[word.length-(i+1)]);
    if(word[i]==word[word.length-(i+1)]){
        cont++;
    }
}
console.log("valor de cont"+cont);


ver=word.length/2;
cont=cont/2;
console.log("valor de ver"+ver);
if(ver==cont)
{
    return true;
}
else 
{
    return false;
}
}