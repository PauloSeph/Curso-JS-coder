const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]



console.log(produtos.filter(function(p) {
    
    return false

}))

// aqui foi desafio onde consegui.. é forma encadiada de chamar o filter
//    Variavel     PArametro  parametro.preco[ preco que seria do array] maior ou igual a 500
const pegarPreco = produto => produto.preco >= 500
const pegarFragil = produto => produto.fragil   // nao precisa colocar o true.

//          variavel = chamando array(produtos).filter(chamandoa funcao pegapreco), filter(chamando a funcao pegarFragil)
const resultadoprodu = produtos.filter(pegarPreco).filter(pegarFragil)
console.log(resultadoprodu)


// fiz dessa maneira para ver se conseguia



const maoe = produtos.filter(function(e) {
    const fazendo = e.preco > 500 && e.fragil == true
    return fazendo
})

console.log(maoe)



