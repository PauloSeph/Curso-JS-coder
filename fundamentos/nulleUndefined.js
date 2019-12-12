// Não inicializada
let valor 
console.log(valor)


// ausencia de valor
valor = null 
console.log(valor)
// console.log(valor.toString()) // Vai dar erro se tentar acessar algo que tiver valor null.

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined.
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco) //False
console.log(produto) //{ preco: null }