const calculateCost = () => {
        let cost = 200
    document.querySelectorAll('[type=radio]:checked').forEach(radiochecked => {
        cost += Number(radiochecked.value)
    })
    document.querySelector('.result').textContent = cost + "€"
}

calculateCost()

document.querySelectorAll('[type=radio').forEach((radio) => radio.addEventListener('click', () =>{
    calculateCost()
}))


