// 3.Copy Contar el número de elementos positivos, negativos y que valgan cero en un array de 10 enteros.Los valores habrán sido harcodeados en un array.La salida por consola debería ser similar a esta:

// Array con valores harcodeados: [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]

let positivos = 0
let negativos = 0
let ceros = 0
const numbers = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]

numbers.forEach(num => {

    if (num > 0) {
        positivos++
    } else if (num < 0) {
        negativos++
    } else {
        ceros++
    }


});

console.log('Cantidad de numeros positivos :' + positivos)
console.log('Cantidad de numeros negativos :' + negativos)
console.log('Cantidad de ceros :' + ceros)



// Cantidad de positivos: 6
// Cantidad de negativos: 3
// Cantidad de ceros: 1