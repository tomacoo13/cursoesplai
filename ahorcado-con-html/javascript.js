const replaceAt = (string, character, index) => {
    return string.substring(0, index) + character + string.substring(index + character.length);
}

const words = ['casa', 'perro', 'ordenador', 'mesa']
const secretWord = words[Math.floor(Math.random() * words.length)]
let hiddenWord = secretWord.replace(/./g, "_ ");
document.querySelector('.hiddenWord').innerHTML = hiddenWord
alert(secretWord)

let error = true
let errorCount = 0

const evaluateWord = () => {
    const letter = document.querySelector('input').value.toLowerCase()

    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === letter) {
            hiddenWord = replaceAt(hiddenWord, letter, i * 2);
            error = false
        }
        document.querySelector('.hiddenWord').innerHTML = hiddenWord
    }
    if (error) {
        errorCount++
        document.querySelector('.col2').style.backgroundPosition = -errorCount * 200 + 'px'
        if (errorCount === 4) {
            document.querySelector('h1').innerHTML = 'Has Perdido'
        }
    }

    if (!hiddenWord.includes("_")) {
        document.querySelector('h1').innerHTML = 'Has Ganado'
    } else {
        error = true
    }
}

document.querySelector('button').addEventListener('click', evaluateWord)