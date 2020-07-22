
function decode(word3) {
  const numbers = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let vet1 = [];
  vet1 = mesclian(word3, numbers);
  let retorno = vet1.join('');
  return retorno;
}
// fazer um func pra juntar o encode e o decode
  function mesclian (word4, subst) {
    let vet1 = [];
  for (let i = 0; i < word4.length; i += 1) {
    let char = word4.charAt(i);
    if (char in subst) {
      vet1.push(subst[char]);
    }
    else {
      vet1.push([char]);
    }
  }
  return vet1;
  }
let word3 = "h3 th2r2!";
console.log(word3);
console.log(decode(word3));