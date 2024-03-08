// 4.Leer 10 enteros harcodeados en un array y mostrar la media de los valores negativos y la de los positivos.

let positivos = 0
let sumaPositivos = 0

let negativos = 0
let sumaNegativos = 0

let ceros = 0
let sumaCeros = 0

const numbers = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]

numbers.forEach(num => {

    if (num > 0) {
        sumaPositivos += num
        positivos++

    } else if (num < 0) {
        sumaNegativos += num
        negativos++

    }


});

console.log('La media de los números positivos es :' + sumaPositivos / positivos)
console.log('La media de los números negativos es :' + sumaNegativos / negativos)
