const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]



const notasBaixas = []
// Sem usar o callback
// i é indice em cima das notas.
for (let i in notas) {
    if (notas[i] < 7) { // se a nota i, for menor que 7
        notasBaixas.push(notas[i]) // push que vai puxar o elemento
    }
} 

console.log(notasBaixas)

// Usando callback --> 2 exemplos

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)


// com funcao arrow (1)
const notasbaixas3 = notas.filter(nota => nota < 7)
console.log(notasbaixas3)

// (2) colocando notamenorque7 em uma const, na verdade a function. Da para puxar em qualquer lugar.
const notaMenorQue7 = nota => nota <7
const notasbaixas4 = notas.filter(notaMenorQue7)
console.log(notasbaixas4)