// Array é um objeto no JS, mas é uma extrutura indexada.
// E dinamica, cresce dinamicamente, dinimui dinamicamente.
// os Tipos de dados para por no array sao os mais variados, já que é fracamente tipado a linguagem
// ou seja, colocamos int, bullian, objeto, outro array etc..
// POrem é boa pratica trabalhar com somente 1 tipo, nao com uma mistura de varios dados. Sempre do mesmo tipo, Homogêneo

console.log(typeof Array) // Funcao
console.log(typeof new Array, typeof []) // Object, object

const azul = [1, 2, 3]
console.log(typeof azul) // object
const verde = new Array
console.log(typeof verde) // object


// Primeira forma de criar um array (Nao tao recomendada). 
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

// Vamos reatribuir para variavel aprovado. Usando a notacao literal, forma mais correta de criar array
// lembrando que os indices sao a partir do 0
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

// vai retornar undefined já que nao tem nenhum elemento 3 da array
console.log(aprovados[3]) 

// Aqui é uma forma de adicionar um novo elemento para array a partir do indice
// Aqui também é mais usado para substituir um elemento que já existe a partir do indice.
aprovados [3] = 'Paulo' 

// Aqui seria a forma mais correta de adicionar um novo elemento na ultima posicao do array
aprovados.push('Abia')

 // ver o tamanho da array, no caso qntos indices (elementos) sao 5.
console.log(aprovados.length)

// Criamos um elemento para o indice 9, porém do indice 5, 6, 7, 8, iram ficam undefined, nao vai dar erro.. mas vai vai ter esses 4 como undefined
aprovados[9] = 'Rafael'
console.log(aprovados.length) 
console.log(aprovados[8] === undefined) // True
console.log(aprovados) // << para ver a forma que vai ficar com os 4 undefined.

// Essa linha causou uma alteraçao no array no qual voce chamou a funcao sort.
aprovados.sort() 
console.log(aprovados)

// para excluir 1 indice do array, porém vai ficar um vazio, undefined.
delete aprovados[1] 
console.log(aprovados[1])
console.log(aprovados[2]) // a bia é ainda o indice 2, a array nao é ordenado quando excluido.



aprovados = ['Bia', 'Carlos', 'Ana']
// Splice serve para: também para adicionar elementos em um determinado indice, como serve para remover elementos de um array

// Primeiro parametro passado no splice representa o indice.
// Segundo parametro a quantidades de elemento que voce quer excluir a partir aquele indice.
// E depois pode por quantos elementos quiser para serem adicionados naquele indice

aprovados.splice(1, 2)
console.log(aprovados)

// Agora para deletar e adicionar novos elementos
// Entao ele retirou a partir do 1 indice o carlos e adicinou elemento 1 e o 2.
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)

// fazendo isso ele vai colocar os elementos sem excluir. 
//              A partir do indice 1, entao ficaria Bia, elemento3, elemento4.
aprovados.splice(1, 0, 'Elemento3', 'Elemento4')
console.log(aprovados)

// Caso quisesse excluir somente 1
// Ele excluiria o primeiro elemento de indice 1, subistituindo o elemento5 e colocando o elemento6 na frente
aprovados.splice(1, 1, 'Elemento5', 'Elemento6')
console.log(aprovados)

console.log(aprovados[3])