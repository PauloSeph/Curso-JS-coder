// 4 JSON

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
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
