const num1 = Number(prompt('Introduce el primer número'))
const num2 = Number(prompt('Introduce el segundo número'))
const operador = prompt('Introduce un operador')

if (operador === ('+')) {
    alert("El resultado de la suma es " + (num1 + num2));

}else if (operador === ('-')) {
    alert("El resultado de la resta es " + (num1 - num2));

}else if (operador === ('*')) {
    alert("El resultado de la multiplicación es " + (num1 * num2));

}else if (operador === ('/')) {
    alert("El resultado de la multiplicación es " + (num1 / num2));
    
}else {
    alert ("Operador no válido")
}