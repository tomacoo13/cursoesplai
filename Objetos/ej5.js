// 5. Convierte el bloque switch-case en un objeto llamado lookup.

function phoneticLookup(val) {
    let result = "";
    const lookup = {

        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",

    }

    // Sólo cambia el código por debajo de esta línea
    switch (val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Frank";
    }

    // Sólo cambia el código por encima de esta línea
    return lookup[val];
}

const value = phoneticLookup("charlie")
console.log(value); // Chicago