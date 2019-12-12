const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// antes de usar o reduce temos que usar o map, para ele colocar todos os bolsistas em uma nova array
console.log(alunos.map(a => a.bolsista)) // Pegando os bolsistas e deixando em uma nova array com bulleans


// Desafio1: Todos os Alunos São bolsistas?
// recebe uma funcao com dois parametros(resultado (valor anterior))(bolsistas que é um True or false)
// vamos retornar uma expressao que o resultado e valor atual tem que dar verdadeiro, se der tudo true = true // e se der falso em algum = false
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista // || = ou, entao um desses tem que ser verdadeiro.
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
