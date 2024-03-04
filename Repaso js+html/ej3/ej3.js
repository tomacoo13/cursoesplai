const randomNumber = Math.floor(Math.random() * 5) + 1;
let jugando = true;
let intentos = 0;
console.log(randomNumber)
while (jugando) {
    const userNumber = Number(prompt('Introduce un número, por favor.'));
    if (userNumber === randomNumber) {
        alert('Número acertado, has ganado.');
        jugando = false;
    } else {
        alert('Número fallado.');
        intentos++;
        if (intentos === 3) {
            jugando = false;
            alert('Has perdido.');
        }
    }
}

alert('Fin de juego');