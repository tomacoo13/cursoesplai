// 1.A partir de un array con cinco nombres de persona, recórrelo con un map para obtener un nuevo array con el texto «Conozco a alguien llamado » precediendo a cada nombre.

const names = ['Juan', 'Roberto', 'Ernesto', 'Miriam', 'Laura']
const multipliedNames = names.map(name => 'Conozco a alguien llamado ' + name)

console.log(multipliedNames)