// Essa aula é para simular um objeto para mostrar que ele é um object, porém nao faz sentido simular esse array

// criando um objeto 
const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(quaseArray)

// Usar toString para poder simular a impressao no console como se fosse de fato uma array
Object.defineProperty(quaseArray, 'toString', {
    value: function () {
        // Vai retorna os valores do objeto, referenciando o objeto atual  this.
        return Object.values(this)
    },
    // Nao inumerada.
    enumerable: false
})

console.log(quaseArray[0])



// mostrando como os dois sao iguais...
const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)