// aula referente a node e sobre o console do browser. (escopos)
// node - backEnd aqui no visual studio code
// browser - FrontEnd
// Preciso reconhecer que local esta executando o seu runtime no JS. 
// Runtime 'e para saber onde se estar'a executando, no browser ou no Node.

let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'Teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// Criando uma variavel sem var e let ou const.
abc = 3 // nao fazer isso.. // pois ela vai direto para o escopo global
console.log(global.abc)

