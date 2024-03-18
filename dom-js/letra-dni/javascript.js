const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
const calculate = (dni) => {
    console.log(dni.length !== 8, isNaN(Number(dni)))
    if (dni.length !== 8 || isNaN(Number(dni))) {
        alert('El dni debe tener 8 dígitos y ser un número')
    } else {
        const rest = dni % 23;
        const letter = letters[rest];
        document.querySelector('#result').value = letter;
    }
}

document.querySelector('button').addEventListener('click', () => {
    const n = document.querySelector('#dni').value;
    calculate(n)
})