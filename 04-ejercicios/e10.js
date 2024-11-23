let longitud = 7;

function crearArray(n) {
  let resultado = [];
  for (let i = 0; i < n; i++) {
    resultado[i] = i + 1;
  }
  return resultado;
}
let resultado = crearArray(longitud);
console.log(resultado);
