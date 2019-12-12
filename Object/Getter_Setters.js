// Ambas sao funçoes!
// Getter para ler valor de um variavel (get)
// Setter para alterar um valor de um variavel (set)


const sequencia = {
    _valor: 1, // convenção, _ é para mostrar para os outros desenvolvedores para nao alterar(privado). Porem eles podem alterar
    // colocamos o get e criamos uma funcao chamada valor.
    // e dento dessas funcoes os valores sao acessados, e a vantagem é que vc pode fazer alguma validade ou processamento antes de devolver.
    get valor() { return this._valor++ }, // vou pegar o valor e retornar e vai acrescentar para um valor seguinte.
    set valor(valor) {
        if (valor > this._valor) { // fazendo uma condicao, uma validacao, sempre o valor tem que subir, nao ir para trás, descer..
            this._valor = valor
        }

    }
}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)