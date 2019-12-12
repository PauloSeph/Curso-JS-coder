const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado '
console.log(resultado(7.1))
console.log(resultado(6.7))

// A resposta de um operador ternário, é retorna um dos dois valores, é possivel armazenar em uma const ou também em uma function
const azul = nota >= 7 ? 'Aprovado' : 'Reprovado '

// Daria para fazer assim também.
const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}