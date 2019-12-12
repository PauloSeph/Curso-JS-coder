// Passando dois parametros, impost e moeda

function getPreco(imposto = 0, moeda = 'R$') {
    // vai retornar um template string
    // aqui no caso o 1 é 100%, o desc é quando se chama, ai seria 100% - 15
    // ou do impost também, 100% + 10%imposto. Do valor que passar no caso.
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}` 
    
      
    // Lembrando que como vai retornar, o R$ vem antes dos valores, seguindo o return.
}



// criando um object
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15, // desconto de 15%
    getPreco  // esta sendo associado ao getPreco da function. Já que so tem uma.
}

global.preco = 20 // fazendo assim<<
global.desc = 0.1 // E assim - Ai de fato ele Lê, pois vai para o global

console.log(getPreco()) // no contexto global nao está definido... Vai dar R$ NAN
console.log(produto.getPreco()) // da para chamar a partir de um object


// criando outro object
const carro = { preco: 49990, desc: 0.20}
// chamando a function getpreco.call.
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))


// Conseguimos passar os parametros da function, passamos ela diretamente.
// No caso 0.17 é a %.
// Seguindo que primeiro é o imposto e depois a moeda.
// Entao aqui seria valor de 49990 com desconto de 0.20% =20% + 0.17% = 17%
console.log(getPreco.call(carro, 0.17, '$'))
// aqui também, através de array, faz a mesma coisa so muda a forma de escrita.
console.log(getPreco.apply(carro, [0.17, '$']))

// Fazendo dessa forma ta chamando o produto e calculando em cima dos valores que tem no produto.
console.log(getPreco.call(produto, 0.0, '$'))

// poderiamos chamar o global também, que passamos anteriormente.
console.log(getPreco.apply(global, [0.17, '$']))







