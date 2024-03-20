const verRespuestas = () => {

    document.querySelectorAll('.word').forEach((obj) => {
        obj.style.backgroundColor = 'red'
    })
}
document.querySelector('button').addEventListener('click', verRespuestas)