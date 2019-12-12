// novo recurso do ES2015


// Object 
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// As chaves representa um operador de destruturar
// Aqui estamos falando para tirar o nome e idade do Object que é (pessoa)
const { nome, idade } = pessoa

// Percebe-se que essa é uma forma de uma unica linha retirar varios atributos
// de dentro de um object e atribuir as suas respectivas variaveis.
console.log(nome, idade)

// Ou sejá, tira os atributos do objeto Pessoa
// Atraves de extrair o nome  podemos passar apelidos, como n e i
const { nome: n, idade: i} = pessoa
console.log(n, i)

// Tirando uma atributo que não existe dentro do object(pessoa)
// Ele vai retornar undefined e True
// bemhumarada = true, ou seja por padrão se não vier nada de dentro do object pessoa 
// por padrão assuma o valor True
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)


const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

const {conta: {ag, num }} = pessoa

