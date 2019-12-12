// Criando um variavel (const) com um array vazio.
var funcs = []

// Ou sejá, vai de 0 até 9 incrementando de um em um, 0, 1, 2, até o 9, até que o i fique igual
// a 10 e sai do laço.
for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

var numeros = [1, 2, 3]
numeros.push(4)
console.log(numeros)