// Sabemos que Object é uma função.
console.log(typeof Object)

// Abaixo estamos instanciando uma função.
// Agora temos um Object(objeto) criado a partir de uma função.
console.log(typeof new Object)

const cliente = function() {}
console.log(typeof cliente)
console.log(typeof new cliente)

//class é um jeito 
class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto())