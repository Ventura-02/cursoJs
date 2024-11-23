function precioCompleto(precio, impuesto) {
  let Total = precio + precio * impuesto;
  return Total;
}

let resultado = precioCompleto(19.9, 0.15);
console.log(resultado);
