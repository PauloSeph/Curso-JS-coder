// Criando um variavel (const) com um array vazio.
var funcs = []


// Ou sejá, vai de 0 até 9 incrementando de um em um, 0, 1, 2, até o 9, até que o i fique igual
// a 10 e sai do laço.
for (let i = 1; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[0]()
funcs[8]()