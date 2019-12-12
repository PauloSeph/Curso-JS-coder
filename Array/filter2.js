// Vamos implementar o filter igual fizemos em foreach, em map. Mostrando como funciona internamente

Array.prototype.filter2 = function(callback) {
    // gerando um novo array
    const newArray = [] 
    // fazendo uma laço for! percorrendo do inicio ao fim o array
    for (let i = 0; i < this.length; i++) { 
        // fazendo um teste, this[Elemento], indice, proprio array, se der true ele vai adicionar no novo array (newArray)
        // caso contrario ele nao vai fazer nada
        if(callback(this[i], i, this))  
            newArray.push(this[i])
    }
    return newArray
}


const produtos = [ {arroz:'seila'},
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]


console.log(produtos.length)

console.log(produtos.filter(function(p) {
    return p.nome === 'Notebook'

}))






