// 7.Contar el número de elementos positivos, negativos y que valgan cero en un array de 10 enteros.Los valores habrán sido harcodeados en un array.La salida por consola debería ser similar a esta:

// Array con valores harcodeados: [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]

const num = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
let positivos = 0
let negativos = 0
let ceros = 0


for (let i = 0; i < num.length; i++) {
    if (num[i] > 0) {
        positivos++

    } else if (num[i] < 0) {
        negativos++

    } else {
        ceros++
    }
}

console.log('Cantidad de positivos: ' + positivos);
console.log('Cantidad de negativos: ' + negativos);
console.log('Cantidad de ceros: ' + ceros);

// Cantidad de positivos: 6
// Cantidad de negativos: 3
// Cantidad de ceros: 1