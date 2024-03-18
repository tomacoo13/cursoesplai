const calculate = () => {
    const userNumber = document.querySelector('#number').value
    let contador = ''
    for (let i = 0; i < userNumber; i++) {
        contador += 'Cosas guays '
    }
    document.querySelector('#content').innerHTML = contador
}
document.querySelector('#number').addEventListener('input', calculate)