const filter = (element) => {
    alert('111')
}
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', filter)
});

{/* <script>    Código de Pablo

    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const attr = e.target.getAttribute('href');
            const attrAux = attr.substring(1);
            document.querySelectorAll('.box').forEach(box => {
                if (box.classList.contains(attrAux)) {
                    box.classList.remove('invisible')
                } else {
                    box.classList.add('invisible');
                }
            })
        });
    });
</script> */}