const comprobarRespuestas = () => {
    document.querySelectorAll('input[type=radio]:checked').forEach((input) => {
        if (input.value == ('right')) {
            input.closest('p').style.backgroundColor = 'green'
        } else {
            input.closest('p').style.backgroundColor = 'red'
        }
    })

}
document.querySelector('button').addEventListener('click', comprobarRespuestas)
