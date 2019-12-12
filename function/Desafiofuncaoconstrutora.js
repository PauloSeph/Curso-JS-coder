function Pessoa (nome) {
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }

}

const p1 = new Pessoa('joão')
p1.falar()


// Do mesmo jeito que cima, porém tirando o this. 
// Porém aqui nao teria acesso a variavel nome, já que this faz ela se torna publica.
function Pessoa (nome) {
    // this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${nome}`)
    }

}

const p2 = new Pessoa('joão')
p2.falar()


// Entao podemos criar um object a partir de uma function construtora, de uma class, ou apartir de
// uma factory.