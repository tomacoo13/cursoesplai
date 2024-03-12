// 2.La constante ojos debe valer la propiedad ojos del objeto testObj. Además, la constante nombre debe valer la propiedad nombre del objeto testObj.

const testObj = {
    "ojos": 2,
    "nombre": "Pablo",
    "piernas": 2
};

// Sólo hay que hacer modificaciones por debajo de esta línea 
const ojos = testObj.ojos;      // Cambiar esta línea
const nombre = testObj.nombre;    // Cambia esta línea

console.log(ojos); // Debería mostrar: 2
console.log(nombre); // Debería mostrar: "Pablo"