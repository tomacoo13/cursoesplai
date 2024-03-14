
const letraRandom = (nombre) => {
    const randomPosition = Math.floor(Math.random() * nombre.length);
    return nombre[randomPosition]
}

console.log(letraRandom('Juanca'))