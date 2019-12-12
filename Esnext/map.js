const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)
console.log(tecnologias.get('react'))


// Outra forma de criar o map e ir atribuindo atributos.
const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Object'],
    [123, 'Numero'],
])

chavesVariadas.forEach((v1, ch) => {
    console.log(ch, v1)
})


console.log(chavesVariadas.has(123)) 
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123)) 
    
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'a')

