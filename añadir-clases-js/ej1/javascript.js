
const cubo = document.querySelector('.box')
const animar = () => {
    cubo.classList.add('animate__animated', 'animate__rubberBand')
}

cubo.addEventListener('animationend', () => {
    cubo.classList.remove('animate__animated', 'animate__rubberBand');
});

document.querySelector('button').addEventListener('click', animar)
