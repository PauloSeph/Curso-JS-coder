// array de objeto
// Criamos essa estrutura que vamos navegar e a ideia é extrair as notas de todos os alunos, independente da turma
const escola = [{
    nome: 'Turma m1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
 
    }]
}, {
    nome: 'Turma m2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

// Criando uma funcao.
const getNotadoAluno = aluno => aluno.nota
// a partir desse metodo vamos ter as notas dos --> alunos
const getNotasdaTurma = turma => turma.alunos.map(getNotadoAluno)

// Escola --> array com duas turmas, entao ele vai extrair apenas a getNotasdaTurma.
const notas1 = escola.map(getNotasdaTurma)
console.log(notas1)


// Flatmap não existe na api padrao.
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasdaTurma)
console.log(notas2)