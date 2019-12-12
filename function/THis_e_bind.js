const pessoa = {
    saudacao: 'Bom dia!',
    // da para criar uma funcao sem passar os parametros de function
    falar() {
        console.log(this.saudacao)
        console.log(this === pessoa)
    }
}



pessoa.falar()
const falar = pessoa.falar

falar() // conflito entre paradigmas: funcional e o OO

// bind se passa para qual objeto se quer resolvido para this
// bind é responsavel para arramar um determinado objeto para ele ser o dono da execucao
// naquele metodo sempre que aquele metodo for chamado.
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

