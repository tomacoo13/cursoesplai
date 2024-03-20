const desplegar = () => {
    document.querySelector('.menu').classList.toggle('active')
}

document.querySelector('.burguer').addEventListener('click', desplegar)