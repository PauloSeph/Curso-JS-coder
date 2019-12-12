// Os Arrays originais nao sao mexidos, sao gerados novo array que é o resultado da concat

const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
// vamos usar o concat para pegar o array filhoo e filhas para jogar em um unico array
// assim concatenamos, e podemos acrescentar mais um elemento
const todos = filhas.concat(filhos, 'Fulano')

// Mostrando que o concat nao afeta os arrays principais.
console.log(todos, filhas, filhos)


// podemos fazer com o um array vazio e passar o concat, passando por parametro array 1, array 2, e o valor 5
// e um outro array que tem dentro outro array(matriz), total de 4 elementos
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]])) // --> [ 1, 2, 3, 4, 5, [ 6, 7 ] ] 
// ele pegou e tirou somente o primeiro array da matriz.


// passando outros valores antes ele também iria cancatenar
console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]])) // -->  [ 'a', 'b', 1, 2, 3, 4, 5, [ 6, 7 ] ]

