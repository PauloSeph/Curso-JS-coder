// 1. criando uma funcao normal.

let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

// Pode tirar o corpo da funcao no caso o bloco, se for somente uma linha.
// e o return é chamado automaticamente. (return implicito)
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // Possui um parametro.
console.log(ola())
