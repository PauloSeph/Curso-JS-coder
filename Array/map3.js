// 4 JSON

// Estamos fazendo isso para saber como é o funcionamento interno do map

// fazendo a funcao a map2 a partir do Array.prototype
Array.prototype.map2 = function(callback) {
    // criei um array vazio
    const newArray = []
    // percorri um array Original usando o this
    for (let i = 0; i < this.length; i++) {
        // dentro de cada interacao chamei o callback, passando this[elementoatual], indice, e o array Original
        // e o resultado dessa callback coloco no newArray e chamei o return para retornar o novo array
        newArray.push(callback(this[i], i, this)) 
    }
    return newArray
 }



const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array com os precos

// convertendo um JSOn para object
const paraObjeto = json => JSON.parse(json) 
// Aqui produto.preco é uma funcao, onde ele vai pegar somente os precos, se quisesse que fosse so os nome era so por produto.nome
const apenasPreco = produto => produto.preco 

// criando um variavel para fazer o map, chamando JSON(paraObjeto(funcao para converter JSON para objeto)) e chamando a outra function 
// apenaspreco( onde vai so chamar o preco)
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)