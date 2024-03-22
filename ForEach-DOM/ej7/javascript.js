const trs = document.querySelectorAll('tr')
trs.forEach((tr) => {
    tr.addEventListener('click', () => {
        trs.forEach((tr) => {
            tr.style.backgroundColor = 'transparent'
        })
        tr.style.backgroundColor = 'green'
        tr.querySelector('input[type=radio]').checked = true
    })
})