// Factory = fabrica.
// Factory --> é uma funcao que retorna um object, sempre retorna um novo object.

// Factory simples

// cria uma funcao
function criarPessoa() {
    // aqui dentro retorna um object
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
console.log(criarPessoa())

