// 7. Asigna a la constante gloveBoxContents el valor de la propiedad glob box.

const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.glove; // Cambia esta línea
console.log(gloveBoxContents); // Debería valer: "maps"