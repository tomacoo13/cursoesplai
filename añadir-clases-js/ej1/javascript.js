const animar = () => {
    document.querySelector('.box').classList.add('animate_animated', 'animate__flash')
}
document.querySelector('button').addEventListener('click', animar)