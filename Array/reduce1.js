// Percorrer um array com mais proposito 

// Serve para transformar uma array em um unico elemento, nao obrigatoriamente, mas pode transformar uma array em outro array,
// array em um numero, array em uma string
// primeiro reduce recebe os dois elementos do array, indice 0 e indice 1, ai faz alguma coisa com esses dois elementos
// o resultado dessa funcao é passada para proxima e o elemento atual.
// Primeiro é sempre o acumulador
// Segundo é sempre o atual
// EXEMPLO: 12 50
//          62 30
// Se passado um valorinicial o acumulador nao seram os dois primeiros elementos que vai ser os iniciais, mas se nao
// passar o valor atual, ele na primeira chamada vai chamar o indice 0 e 1, e ai vai acumulando



const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// alunos = array
// lembrando que arrow tem return implicito
// Chamando o map para extrair elemento (a.nota) as notas dos alunos
// vamos chamar reduce que chama um callback. E passar uma funcao com dois parametros (acumulador, atual)
console.log(alunos.map(a => a.nota))// esse array é as notas

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    console.log(acumulador + atual) // mostrando os resultados sem acumulador e atual juntos. 
    return acumulador + atual 


 }, 0 ) // <-- com valor inicial seria assim

 // como nao passamos valor inicial para o reduce, entao ele passou o Elemento 0 e elemento 1
 // elemento de indice 0 = acumulador, elemento de indice 1 = atual, ou sejá, começamos do segundo elemeneto
 // uma vez que passou esses dois elementos o resultado é a soma 7.3 + 9.2, 16.5 que foi passado na segunda vez que a funcao callback 
 // foi executada como um acumulador, resultado da callback anterior, pegando 3 elemento 9.8, dando 26.3 e passou o ultimo elemento 8.7

console.log(resultado) // ver o resultado final

