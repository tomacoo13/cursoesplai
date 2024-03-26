function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const btnPulsado = () => {
    document.querySelector('.fraseOrdenada').innerHTML += e.target.innerHTML
}

const frases = ['El cielo es bonito', 'La liebre es más rápida', 'La primavera ha llegado']
const frase = frases[Math.floor(Math.random() * frases.length)]
const palabras = frase.split(" ")
const palabrasMezcladas = shuffle(palabras);
console.log(palabrasMezcladas)

const imprimirPalabras = palabrasMezcladas.map(palabra => `<span class = "button">${palabra}</span>`).join(' ')

document.querySelector('.fraseDesordenada').innerHTML = imprimirPalabras

document.querySelectorAll('.button').forEach(obj => obj.addEventListener('click', btnPulsado))

// document.querySelector('button').addEventListener('click', comprobar)