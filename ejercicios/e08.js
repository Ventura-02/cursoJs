let array = [
  {
    id: 1,
    name: "Abraham",
  },
  {
    id: 2,
    name: "Juan",
  },
  {
    id: 3,
    name: "Daniel",
  },
];

let pares = [
  [1, { id: 1, name: "Abraham" }],
  [2, { id: 2, name: "Juan" }],
  [3, { id: 3, name: "Daniel" }],
];

function toPairs(arr) {
  let pairs = [];
  for (idx in arr) {
    let elemento = arr[idx];
    pairs[idx] = [elemento.id, elemento];
  }
  return pairs;
}

let resultado = toPairs(array);
console.log(resultado);
