const menu = document.querySelector('.menu')
const desplegar = () => {
    document.querySelector('.menu').classList.toggle('active')
}
document.querySelector('.burguer').addEventListener('click', desplegar)


window.addEventListener('click', (e) => {
    if (!menu.contains(e.target)) {
        menu.classList.remove('active');
    }
});