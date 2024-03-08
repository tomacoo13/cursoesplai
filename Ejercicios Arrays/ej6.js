// 6.Escribe una función getLastElement que reciba un array como parámetro de entrada y devuelva el último elemento del array.

const getLastElement = newArray => {
    newArray.reverse()

    return newArray[0]
}
console.log(getLastElement([1, 2, 3]));// debería devolver 2.

// const getLastElement = newArray => newArray.reverse()[0]  VERSIÓN CORTA


/*  EJERCICIO RESUELTO DE PABLO

const getLastElement = (arr) => {
    return arr[arr.length - 1];
}
3
const v = getLastElement([1, 2, 3]);
console.log(v); //
*/