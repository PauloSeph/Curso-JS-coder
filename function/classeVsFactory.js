// Class --> funcao construtora.
class Pessoa {
    constructor(nome) {
        // no momento que foi passado THIS.nome ela se tornou publica.
        this.nome = nome 
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }

}

const p1 = new Pessoa('Joao')
p1.falar( )


// Factory
// Criando uma funcao arrow
const CriarPessoa = nome => {
    return { // dentro do object vou colocar um metodo falar:
        falar: () => console.log(`Meu nome é ${nome}`) // nesse contesto nao precisa usar o this.
    }

}

const p2 = CriarPessoa('Joao')
p2.falar()