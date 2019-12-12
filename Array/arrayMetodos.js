const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// pop --> remove o ultimo elemento do array
pilotos.pop()
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen' ]

// push --> adiciona um novo elemento na array na ultima posicao.
pilotos.push('Verstappen')
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

// shift --> Remove o primeiro elemento da lista
pilotos.shift()
console.log(pilotos) // [ 'Alonso', 'Raikkonen', 'Verstappen' ]

// unshift --> adiciona um novo elemento para o começo da array
pilotos.unshift('Hamilton')
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]


// Splice pode adicionar e remover elementos.

// adicionar, a partir do segundo indice, adicionamos elemento Bottas e Massa, e nao removemos nada. (0)
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover, a partir do indice 3 incluindo ele e entao o indice 3 será removido .
pilotos.splice(3, 1)
console.log(pilotos)



// SLICE --> Traducao --> pedaço

// Metodo slice, ele retorna um novo array
// Passamos por parametro depois do slice o 2, que seria o indice.
// Entao a partir do indice 2 incluindo o indice 2 a diante ele vai pegar os elementos da array piloto.
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

// Aqui outro exemplo, ele vai pegar do indice 1, incluindo o indice 1 até o 4, vai até o indice 4 mas sem incluir indice 4.
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)