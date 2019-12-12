// function sem nome.. é uma function anonima. (somente isso)
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
// Diretamente da chamada da function, da para chamar outra function
// passamos uma function anonima para outra function. (é Bem comum em javascript)
imprimirResultado(3, 4, function (x, y){
    return x - y
})
// function arrow é sempre anonima, nao tem como dar um nome a ela, somente function normal.
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()