// Armazenando uma funcao em uma variavel
// Aqui estamos fazendo uma função sem nome.

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
 
// Armazenando uma funcao arrow em uma variavel
// Aqui é uma forma mais reduzida de chamar a function, usando =>
const soma = (a, b) =>
{
    return a + b
}

console.log(soma(2,3))


// retorno implicito. (reduzindo também)
// a, b é os parametros  e  a - b é o retorno implicito, não precisa passar return se estiver em uma linha.
const subtracao = (a, b) => a - b 
console.log(subtracao(2, 3))

// Aqui vamos reduzir mais, também da para fazer dessa maneira.
// Passando so um parametro, nao precisa por entre parentes, já que so tem um atributo
const imprimir2 = a => console.log(a)


imprimir2('legal!!!')