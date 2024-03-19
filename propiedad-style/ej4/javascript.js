// 4.Ejercicio: Slider

const slider = document.querySelector('.slider')
let i = 0
const containerWidth = -512

const moveSlider = () => {
    i++
    if (i > 2) {
        i = 0
    }
    slider.style.marginLeft = i * containerWidth + 'px'

}
document.querySelector('button').addEventListener('click', moveSlider)