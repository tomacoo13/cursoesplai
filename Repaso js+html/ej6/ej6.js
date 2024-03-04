playing = true

while (playing) {
    const secretNumber = Math.floor(Math.random() * 2) + 1
    alert(secretNumber)

    const userNumber = Number(prompt('Entras en una mazmorra con dos puertas. La puerta 1 y la puerta 2. Tras una de las dos puertas, se encuentra una muerte segura. ¿Qué puerta escoges? 1/2'))

    if (userNumber === secretNumber) {
        alert('Has escogido sabiamente')

    } else {
        alert('Mala suerta. Un dragón te come')
        playing = false
    }
}