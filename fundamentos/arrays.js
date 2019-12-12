// Array
const valores = [7.7, 8.9, 6.3, 9.2]

// Mostrando valores do indice 0 e 3
console.log(valores[0], valores[3])

//undefined
console.log(valores[4]) 

// acrescentando um valor para o indice 4.
valores[4] = 10
console.log(valores)

// length vai dizer quantos elementos temos na array
console.log(valores.length)

// push para adicionar novos elementos a array.
// o array é eterogenos, aceita multiplos valores, passando (objeto, um boolean, nulo ou string.)
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// Aqui retira o ultimo valor da Array, imprime no console e retira.
console.log(valores.pop())

// Deleta um valor da lista, no caso ali está o indice 0, no caso o primeiro.
delete valores[0]
console.log(valores)

// Aqui vamos ver que type é da variavel valores, no caso array é um objeto.
console.log(typeof valores)

