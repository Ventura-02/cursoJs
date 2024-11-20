function precioCompleto(precio, impuesto) {
    let Total = precio + precio * impuesto;
    return Total;
}

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);