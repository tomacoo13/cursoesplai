function hacerCosas(a) {
    return a + 1;
}

const hacerCosas = (a) => {
    return a + 1;
}

const edad = 9;


const multiplicar1 = (param) => {
	const resultado = param * 2;
	console.log(resultado)
}

const multiplicar2 = param => {     // Si solamente hay un parámetro de entrada no es necesario paréntesis.
	const resultado = param * 2;
	console.log(resultado)
}

multiplicar1(4);  // 8
multiplicar2(4);  // 8

// Funciones flecha con return

const hacerCosas = (a) => {
    return a + 1
}

const hacerCosas = (a) =>  a + 1 // se hace el return automáticamente sin necesidad de escribirlo
