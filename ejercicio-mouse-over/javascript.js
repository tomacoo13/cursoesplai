const printDiv2 = () => {
    document.querySelector('#div2').innerHTML = "Has hecho un mousehover en el div1."
}
document.querySelector('#div1').addEventListener('mouseover', printDiv2)