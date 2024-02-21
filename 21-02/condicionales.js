/*
1.
if ( 10 == 10 ){
    console.log('You got a true!')
}else {
    console.log('You got a false!')
}

2.
nota =  7

if (nota + 5) {
    console.log(nota + " Aprobado")
}else if (nota === 5) {
    console.log(nota + " Aprobado por los pelos")
    
}else if (nota - 5) {
    console.log(nota + " Suspendido")
    
}

3.

i = 7

if (i > 0) {
    console.log("Es positivo")   
    }else if (i < 0) {
    console.log("Es negativo")
    }
if (i % 2 === 0){
    console.log("Es par")
    }else if (i % 2 !== 0){
        console.log("Es impar")
    }
if (i % 5 === 0 ) {
    console.log("Es multiplo de 5")
    }else if (i % 5 !== 0){
        console.log("No es multiplo de 5")
    }
if (i % 10 === 0 ) {
    console.log("Es multiplo de 10")
    }else if ( i %10 !== 0) {
        console.log("No es multiplo de 10")
    }

4.

const n1 = 3
const n2 = 7
const op = '+'

if (op === '+') {
console.log(n1 + n2)
    }else if (op === '-') {
        console.log(n1-n2)
    }else if (op === '*'){
        console.log(n1*n2)
    }else if (op === '/'){
        console.log(n1/n2)
    }



//Ternario

1.

b = -3

console.log(b>0 ? 'b es positivo': 'b es negativo')

console.log(b%2 === 0 ? 'b es par':'b es impar')



// EJERCICIOS SWITCH
1.
const color = 'amarillo';
switch(color) {
	case 'rojo':
		console.log('Has escogido rojo');
	break;
	case 'azul':
		console.log('Has escogido azul');
	break;
	case 'amarillo':
        console.log('Has escogido amarillo');
    break;
	default:
		console.log('No has escogido ningún color de la lista!');
}


const golosina = 'nubes';

switch(golosina) {
	case 'chicle':
		console.log('Has escogido un chicle');
	break;
	case 'gominola':
		console.log('Has escogido una gominola');
	break;
	case 'regaliz':
		console.log('Has escogido un regaliz');
	break;
	default:
        console.log('No has escogido ninguna golosina de la lista')
}


for (let i=0; i<=100; i+=2){
    console.log(i)
}

for (let i=0; i<=100; i++){
    if (i %2 ===0){
        console.log(i)
    }
}

3.
Imprimir los números del 1 al 20.

Para números divisibles por 3, imprimir “Fizz”.
Para números divisibles por 5, imprimir “Buzz”.
Para números divisibles por 3 y 5, imprimir “FizzBuzz”.
En cualquier otro caso, imprimir el número.
*/

for (let i=0; i<=20; i++){
    if (i % 5 === 0 && i % 5 === 0){
        console.log('FizzBuzz')

    }else if(i % 5 === 0){
        console.log('Fizz')

    }else if (i % 3 === 0){
        console.log('Buzz')
        
    }else {
        console.log(i)
    }

}