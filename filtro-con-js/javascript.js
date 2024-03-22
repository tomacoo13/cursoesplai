const filter = (element) => {
    alert('111')
}
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', filter)
}); 