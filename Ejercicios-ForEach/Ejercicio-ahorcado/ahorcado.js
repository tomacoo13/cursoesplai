const replaceAt = (string, character, index) => {
    return string.substring(0, index) + character + string.substring(index + character.length);
}

const palabras = ['Casa', 'Cangrejo', 'Palabra', 'Rastrillo']
const palabraRandom = palabras[Math.floor(Math.random() * palabras.length)]
let palabraConGuiones = palabraRandom.replace(/./g, "_ ");

const jugando = true
alert(palabraRandom)
while (palabraRandom !== palabraConGuiones) {
    const letraUsuario = prompt('Introdce una letra')
    let hemosAcertado = false
    for (let i = 0; i < palabraRandom.length; i++) {



        if (palabraRandom[i] === letraUsuario) {
            hemosAcertado = true
            palabraConGuiones = replaceAt(palabraConGuiones, letraUsuario, i * 2);
        }
    }
    alert(palabraConGuiones)

    if (!hemosAcertado) {
        alert('Has fallado')

    }


}


