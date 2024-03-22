const concatenar = () => {
    let result = ''
    document.querySelectorAll('[type=radio]:checked').forEach(radioChecked => {
        result += radioChecked.closest('p').textContent
    })
    document.querySelector('.result').innerHTML = result
}

document.querySelectorAll('input[type=radio]').forEach((radio) => radio.addEventListener('click', concatenar))