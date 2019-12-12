// Ambas formas vão percorrendo os atributos, elementos.

// Para array nem é tão bom usar essa forma.
// Nesse exemplo do for in, vamos percorrer os indices de cada elemento/
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]


// Ou seja para cada um dos elementos da nota, ele vai te devolver o indice --> i
// i aqui é uma variavel representando indice 0
for(let i in notas) {
    console.log(i, notas[i])
}


// Da mesma forma que conseguimos pegar de uma array, faremos com object
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}
// Ou seja atributo ta representando primeiro object de pessoa.
// para object é bom usar essa forma
for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}



