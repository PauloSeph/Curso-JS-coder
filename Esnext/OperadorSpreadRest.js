// usar spread com objeto

const funcionario = { nome: 'maria', salario: 12348.99}
const clone = { ativo: true, ...funcionario}
console.log(clone)

// Usar spread com array

const grupoa = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoa, 'Rafaela']
console.log(grupoFinal)