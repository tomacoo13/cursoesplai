/*
1.
const longitud = txt => txt.length

console.log('la cadena tiene ', longitud("Ana María"))


2.
const devuelvePrimeraletra = txt => txt[0]
console.log(devuelvePrimeraletra("hola"))


3.
const devuelveUltimaletra = txt => txt.slice(-1)
console.log(devuelveUltimaletra("hola"))

4.
const  devuelveEnesimaLetra = (txt, num) => txt[num]
console.log(devuelveEnesimaLetra("Agustin", 3))


5.

const position = cadena => cadena.substring(3,7)
console.log(position("wonderful day"))

6.

const devuelveMasLarga = (txt1,txt2) => {
    if (txt1.length > txt2.length){
        return(txt1)
    }else if( txt1.length === txt2.length){
        return(txt1)
    }else{
        return(txt2)
    }
}
console.log(devuelveMasLarga("holaaaaaa","hola"))



const devuelveMasLarga = (txt1,txt2,txt3) => {
    if (txt1.length == txt2.length || txt1.length == txt3.length || txt2.length == txt3.length){
        return("Hay al menos dos cadenas iguales")
    }else if (txt1.length > txt2.length && txt1.length > txt3.length){
        return(txt1)
    }else if ( txt2.length > txt1.length && txt2.length > txt3.length){
        return(txt2)
    }else {
        return(txt3)
    }
}
7.
console.log(devuelveMasLarga("holaa","hola", "holaaaaa"))

8.

const generarNombre = (txt1,txt2,txt3) =>{
    if (txt1.length < 5 || txt2.length < 5 || txt3.length < 5){
        return ("error")
    }else {
        return(txt1.substring(0,3) + txt2.substring(0,3) + txt3.substring(0,3))
    }
}  

console.log(generarNombre("partido","guerra","lasaña"))


9.
const generarNombre2  = (txt1,txt2,txt3) => {
    if(txt1 < 5 || txt2 < 5 || txt3 < 5){
        return('error')
    } else{
        return(txt1.slice(-1) + txt2.slice(-1) + txt3.slice(-1))
    }
}
console.log(generarNombre2('Manola','Paquito', 'Aurelio'))

10.

const generarNombre3  = (txt1,txt2,txt3) => {
    if(txt1 < 5 || txt2 < 5 || txt3 < 5){
        return('error')
    } else{
        return(txt1.slice(-3) + txt2.slice(-3) + txt3.slice(-3))
    }
}
console.log(generarNombre3('Manola','Paquito', 'Aurelio'))


11.

const tieneLetra = (str, letter) => str.indexOf(letter) >= 0  (versión corta)

const tieneLetra = (txt1, letter) => {
    if (txt1.indexOf(letter) >= 0){
        return(true)
    }else {
        return(false)
    }
}
console.log(tieneLetra("Hola", "l"))

12.

const tieneLetra = (str, letter) => str.toUpperCase().indexOf(letter.toUpperCase()) >=0

const tieneLetra = (str, letter) => str.indexOf(letter) >= 0  (versión corta)

const tieneLetra = (str, letter) => {
    if (str.toUpperCase().indexOf(tieneLetra)){
        return(true)
    }else {
        return(false)
    }
}
console.log(tieneLetra("Hola", "L"))

13.

const crearPalabra = (str,num) => {
    let txt = ""
    for (let i = 0; i < num; i++){
        txt+=str
    }
    return(txt)
}
console.log(crearPalabra("a",4))

14.

const crearPalabra = (str,num) => {
    let txt = ""
    for (let i = 0; i < num; i++){
        txt+=str
    }
    return(txt.toUpperCase())
}
console.log(crearPalabra("a",4))

15.

const addGuiones  = str => {
    let word = ""
    for (let i = 0 ; i < str.length; i++){
        const letter = str[i]
        word += letter + '-'
    }
    return(word)
}
console.log(addGuiones('amor'))

16.

const contadorDeLetras = (palabra,letra) => {
    let contador = 0
    for (let i = 0 ; i < palabra.length; i++){
        if (palabra[i] === letra) contador++
    }
    return contador
}
console.log(contadorDeLetras("Holaaa","a"))

17.

const contadorDeLetras = (palabra,letra) => {
    const letterInLowerCase = letra.toLowerCase() //Se declaran las constantes fuera del bucle,dentro de la funcion
    const wordInLowerCase = palabra.toLowerCase()
    let contador = 0
    for (let i = 0 ; i < palabra.length; i++){
        if (wordInLowerCase[i] === letterInLowerCase) contador++
    }
    return contador
}
console.log(contadorDeLetras("HolaA","A"))

18.

const contadorDeLetras2 = (word1,word2,letter) => {
    const letterInLowerCase = letter.toLowerCase()
    const word1InLowerCase = word1.toLowerCase()
    const word2InLowerCase = word2.toLowerCase()
    let contador1 = 0
    let contador2 = 0
    for (let i = 0 ; i < word1.length; i++){
        if(word1InLowerCase[i] === letterInLowerCase) {
            contador1++
        }
    }
    
    for (let i = 0 ; i < word2.length; i++){
        if(word2InLowerCase[i] === letterInLowerCase){
            contador2++
        }
    }
    if(contador1 > contador2){
        return(word1InLowerCase)
    }else if(contador2 > contador1){
        return(word2InLowerCase)
    }else{
        return("Iguales")
    }
}
console.log(contadorDeLetras2("Holaaa","Hola","a"))

19.

const toCase = (txt) => {
    return txt.toUpperCase() + "-" + txt.toLowerCase()
}

console.log(toCase("hola"))

20.
const shortcut = (txt1,txt2) => txt1[0] + txt2[0]
console.log(shortcut("Amnesty","International"))

21.
*/

const firstChar  = (txt) => txt.trim()[0]

console.log(firstChar(" Rosa Parks "))


const indexOfIgnoreCase = (txt1,txt2) => {
    const txt1LowerCase = txt1.lowerCase()
    const txt2LowerCase = txt2.lowerCase()
    
}