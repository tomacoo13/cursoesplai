// 2.Sumar inputs.
// Al pulsar el botón de calcular, recorrer con un bucle forEach los tres inputs presentes en una página HTML y mostrar su suma dentro de un div.
let suma = 0
const calcular = () => {
    document.querySelectorAll('.num').forEach((input) => {
        suma += Number(input.value)
        document.querySelector('p').innerHTML = suma
    })
}
document.querySelector('button').addEventListener('click', calcular)