const costeHotel = numNoches => {
    return numNoches * 140
}

const costeAlquilerCoche = (numNoches) => {

    let alquiler = numNoches * 40

    if (numNoches > 7) {
        return alquiler - 50
    } else if (numNoches > 3) {
        return alquiler - 20
    } else {
        return alquiler
    }

}


const costeAvion = (destino, numNoches) => {
    descuento = 0.9
    let coste

    if (destino === 'oviedo') {
        coste = 15

    } else if (destino === 'tokyo') {
        coste = 700

    } else if (destino === 'madrid') {
        coste = 90

    } else if (destino === 'barcelona') {
        coste = 90

    }
    return numNoches > 3 ? coste * 0.9 : coste

}

const numNoches = prompt('numero de noches');
const destino = prompt('destino');
const resultado1 = Number(costeHotel(numNoches));
const resultado2 = Number(costeAvion(destino.toLowerCase(), numNoches));
const resultado3 = Number(costeAlquilerCoche(numNoches));
console.log("Coste hotel: " + resultado1);
console.log("Coste viaje: ", resultado2);
console.log("Coste alquiler coche: ", resultado3);
console.log("Total:", resultado1 + resultado2 + resultado3);  