// 3.Utilizar la constante playerNumber para acceder a la propiedad correspondiente del objeto testObj.

const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

const playerNumber = 19;
const player = testObj[playerNumber];   // Cambia esta línea

console.log(player); // Debería mostrar: "Unitas"