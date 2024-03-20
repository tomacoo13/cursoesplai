img = document.querySelector('img')
i = 0
const cambiarImagen = () => {
    i++
    if (i % 2 == 0) {
        img.setAttribute('src', './img/PinguLinux_Ying_Yang.png')
    } else {
        img.setAttribute('src', './img/PinguLinux_Yoda.jpg')
    }

}
document.querySelector('img').addEventListener('click', cambiarImagen);
