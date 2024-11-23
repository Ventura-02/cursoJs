let array = [2, 5, 7, -2, -5, -100, 55];

function cuantosPositivos(arr) {
    let sumaTotal = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > 0) {
            sumaTotal++;
        }

    }
    return sumaTotal;
}

let resultado = cuantosPositivos(array);
console.log(resultado);