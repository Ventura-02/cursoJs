function getByIdx(arr, idx){
    if(idx < 0 || arr.length <= idx){
        return "El elemento no existe";
    } else {
        return arr[idx];
    }
}

let resultado = getByIdx ([1, 2], -1);
console.log(resultado);