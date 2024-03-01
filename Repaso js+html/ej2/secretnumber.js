// const nRandom = Math.floor(Math.random() * (max - min + 1)) + min;

const secretNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1)
    console.log(secretNumber)
const userNumber = Number(prompt('Adivina el número'))

if (userNumber === secretNumber) {
    alert("Número correcto")
} else if (userNumber !== secretNumber) {
    alert("Número incorrecto")
} else {
    alert("Por favor introduce números del 1 al 5")
}