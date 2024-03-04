function hasNumber(str) {
    return /\d/.test(str);
}

let validating = true

while (validating) {

    const name = prompt('Inserta tu nombre')

    if (hasNumber(name)) {

        const answer = prompt('El nombre introducido no tiene números, ¿Es tu nombre real? si/no')

        if (answer === 'si') {
            alert('Continuamos con el formulario')
            validating = false
        } else {
            validating = true
        }

    } else {

        alert('Los datos introducidos son incorrectos. El nombre introducido tiene un número.')
        validating = true

    }
}