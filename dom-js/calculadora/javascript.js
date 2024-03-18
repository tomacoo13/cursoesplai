const calcular = () => {
    console.log(111)
    const num1 = Number(document.querySelector('#num1').value)
    const num2 = Number(document.querySelector('#num2').value)
    const operador = document.querySelector('#operador').value

    if (operador == '+') {
        console.log(222)
        result = num1 + num2

    } else if (operador == '-') {
        result = num1 - num2

    } else if (operador == '*') {
        result = num1 * num2

    } else if (operador == '/') {
        result = num1 / num2
    }
    document.querySelector('#result').value = result
}
document.querySelector('#btn').addEventListener('click', calcular)