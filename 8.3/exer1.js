const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
  // const aux = [];
  // Array.object.aux.flatMap(arrays);
  arrays.flatMap((current, index, array)=> console.log(index));
}
flatten();
//assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);