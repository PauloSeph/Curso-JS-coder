// Sofre o Hoisting (içamento da variavel(var))
console.log('a=', a)
var a = 2
console.log('a=', a)

// Seria mesma coisa, do efeito a cima. Hoisting(içamento)
function teste() {
    console.log('a=', a)
    var a = 2
    console.log('a=', a)
}

teste()

// já no let não acontece o Hoisting.
console.log ('b =', b)
let b = 2
console.log ('b =', b)
