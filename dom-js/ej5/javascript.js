// 5.Ejercicio coste viaje.
// Vamos a hacer una aplicación que se encargará de calcular el coste de un viaje. Para ello tendremos una función llamada calculateCost que llamará a otras tres funciones.
// Cada una de estas tres funciones hará un cálculo de un coste parcial del viaje. La suma de los tres costes será el coste total del viaje.
// El código HTML quedaría así:


calculateHotelCost = (numNights) => numNights * 140

calculateAirplaneCost = (city, numNights) => {
	let cost
	if (city == 'oviedo') {
		cost = 15
		return

	} else if (city == 'tokyo') {
		cost = 700
		return

	} else if (city == 'madrid' || city == 'barcelona') {
		cost = 90
		return
	}
	if (numNights > 3) {
		cost *= 0.9
		return coste
	}

}

calculateRentingCarCost = (numNights) => {
	let cost = numNights * 40

	if (numNights >= 7) {
		return cost -= 50

	} else if (cost >= 3) {
		return cost -= 20

	} else {
		return cost
	}
}

const calculateCost = () => {
	const numNights = document.querySelector("#numNights").value;
	const city = document.querySelector('#city').value

	const costHotel = calculateHotelCost(numNights)
	const airplaneCost = calculateAirplaneCost(city)
	const costCar = calculateRentingCarCost(numNights)

	console.log("Coste de Hotel:", costHotel);
	console.log("Coste de viaje:", airplaneCost);
	console.log("Coste alquiler del coche:", costCar);
	document.querySelector("#costHotel").value = costHotel
	document.querySelector('#costTravel').value = airplaneCost
	document.querySelector('#costCar').value = costCar

	const total = document.querySelector('#costTotal').value = costHotel + airplaneCost + costCar
	console.log("Coste total:", total)
}

document.querySelector('#calculateCost').addEventListener('click', calculateCost)

