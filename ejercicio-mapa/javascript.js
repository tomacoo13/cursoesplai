let printCoin = ''
for (let i = 0; i < 10; i++) {
    const x = Math.floor(Math.random() * 725);
    const y = Math.floor(Math.random() * 483);

    printCoin += ' <img src="./goldcoin.png" style="width:50px;position:absolute; margin-left:' + x + 'px; margin-top:' + y + 'px">'
}
console.log(printCoin)
document.querySelector('.map').innerHTML = printCoin;