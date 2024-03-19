// Los siguientes códigos de Javascript:
const showPopUp = () => {
    document.querySelector('#lightboxContainer').style.display = 'block';
}

const hidePopUp = () => {
    document.querySelector('#lightboxContainer').style.display = 'none';
}

document.querySelector('.btn').addEventListener('click', showPopUp);
document.querySelector('#ocultar').addEventListener('click', hidePopUp);
