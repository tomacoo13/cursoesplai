/*
12.
function testSize(num) {
 if (num<5){
    return ("Tiny")
 }else if (num < 5){
    return ("Small")
 }else if (num < 15){
    return ("Medium")
 }else if (num < 20){
    return ("Large")
 }else if (num >= 20){
    return ("Huge")
 }else {}
 return ("Invalid Number")

}

const r = testSize(20)
console.log(r)

13.

function nand(boolean1,boolean2){
    if (boolean1=== true && boolean2 === true){
        return(false)
    }else {
        return(true)
    }
}

console.log(nand(true,true))
console.log(nand(false,false))
console.log(nand(false,true))
console.log(nand(false,false))

14.
function nor(boolean1,boolean2){  
    // Código resumido en una línea  -->   return !(b1 && b2);
    
    if (boolean1=== false && boolean2 === false){
        return(true)
    }else {
        return(false)
    }
}
console.log(nor(true,true))
*/




15.

function xor(boolean1,boolean2){    //console.log(b>0 ? 'b es positivo': 'b es negativo')
    
    return (boolean1 !== boolean2)

}
console.log(xor(true,true))
console.log(xor(true,false))
console.log(xor(false,true))
console.log(xor(false,false))


