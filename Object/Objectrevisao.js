// Coleção dinamica de pares chaves/valor. // Adicionar ou remover.
// Forma de criar um object a partir do new, chamando o Object(funcao)

const produto = new Object 
// Usando essa anotacao: podemos adicionar chave e valor dessa forma.. nome seria a chave e cadeira o valor.
produto.nome = 'Cadeira'
// Essa outra anotacao com []: dessa forma também conseguimso adcionar
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
// a partir do produto conseguimos deletar também.
delete produto.preco
delete produto['Marca do produto']

console.log(produto)







// Podemos ver que em um object podemos ter outros objects, array e function.
// Outro exemplo:

const carro = {
    modelo: 'A4',
    valor: 89000,
    // outro object
    proprietario: {
        nome: 'Raul',
        idade: 56,
        // outro object
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    // Array de objects --> array []    object --> {}
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    // podemos ter function dentro desse carro
    calcularValorSeguro: function() {
        //...
    }
}
// para acessar os elementos do objects
carro.proprietario.endereco.numero = 1000 // Podemos fazer assim
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante' // ou assim
console.log(carro)

// podemos também deletar, por exemplo condutores, tudo que estiver a baixo dele vai ser deletado.
delete carro.condutores
delete carro.proprietario.endereco // da mesma forma aqui
delete carro.calcularValorSeguro // e aqui no caso da function, também deletando ela.
console.log(carro)
console.log(carro.condutores) // nao vai gerar problema, mas vai voltar undefined

// cuidado em acessar atributos de algo que esteja indefinido, acessar uma propriedade de algo que esteja indefinido vai dar problema.
console.log(carro.condutores.lenght) 