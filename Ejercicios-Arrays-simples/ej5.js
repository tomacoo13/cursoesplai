// 5.Escribe una función llamada setFirstElement que reciba como parámetro de entrada un array y un valor cualquiera. El valor recibido debería reemplazar lo que haya en la primera posición del array. El array debería ser devuelto.

const setFirstElement = (newArray, newValor) => {
    newArray[0] = newValor
    return newArray
}


console.log(setFirstElement([1, 2, 3], 8))