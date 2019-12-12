/* Imperativo exemplo: É uma forma que voce vai ensinar para alguem exatamente os passos que tem que ser executado
 sem deixar nenhum detalhe faltando.
Entao o foco nao é muito o que tem que ser feito, mas como tem que ser feito o algoritmo, entao o como tem que ser feito é mais
importante do que o que tem que ser feito.

Declarativa é ao contrario voce simplesmente diz o que tem que ser feito, internamente as coisas vao sendo feitas.

*/

// criando um array, nesse array tera alguns objetos que representam nossos alunos
const alunos = [
    { nome: 'Joao', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Abordagem mais imperativa. 
let total1 = 0
// vamos sair do indice 0, para o tamanho do array -1, incrementando o laço i++
for (let i = 0; i < alunos.length; i++) {
// estou percorrendo cada um dos alunos, pegando o indice dele[i], peguei a nota(chave) e acrescentando += (atribuicao aditiva), ao total1
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)



// Declarativo

// Criando uma funcao, que vai pegar aluno e vai apenas retonar a nota.(aluno.nota)
const getNota = aluno => aluno.nota
// Criando outra funcao, pegando total e o atual, que é o criterio que vou usar para agregar os valores
const soma = (total, atual) => total + atual
// map é para fazer novo array com o getNota, e o reduce é para agregar os valores, seja em unico valor por exemplo a soma, seja em um array resultante
// seja em um object, mas tem essa ideia de reduzir, agregar em um só
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

 