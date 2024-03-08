const num = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
let positivos = 0
let sumaPositivos = 0

let negativos = 0
let sumaNegativos = 0



for (let i = 0; i < num.length; i++) {
    if (num[i] > 0) {
        sumaPositivos += num[i]
        positivos++

    } else if (num[i] < 0) {
        sumaNegativos += num[i]
        negativos++

    }
}




console.log('La media de positivos: ' + sumaPositivos / positivos);
console.log('La media de negativos: ' + sumaNegativos / negativos);

// Cantidad de positivos: 6
// Cantidad de negativos: 3
// Cantidad de ceros: 1