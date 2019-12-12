// De vez de usarmos o if e o else vamos usar o switch
// A Expressão nao retorna True ou False, a expressão é um valor
// Criando uma const e atribuindo uma function // criando uma condicaos, floor vai aredondar para baixo, vai arredondar os alunos para baixo.
// case representa o mesmo que o if(10 ,9) porém ele lê todos case se não usar o break, o break serve para parar.


// Break é um desvio de fluxo, o que seria esse desvio de fluxo?
// é sair de um ponto e  pular umas linhas e ir para outro
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        // aqui se for 10 ou 9 vai executar o quadro de honra e depois Break(parar) no caso o break é para parar o bloco switch, não o que está fora.
        // sem o break ele executa todos que estão a baixo.
        // Para cada case da para ter um sentença de codigo.
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota invalida')
    }
    // fora.
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)

// switch é uma seleção multipla
// Nao retorna verdadeiro ou false (Nao é relacional) Pode passar valores ou tipos para ele selecionar entre esses valores
// Switch por padrão usa o break, para executar um dos casos e sair. E uma vez que não usar o break ele executa todos case que estão abaixo.
// default para não pegar nada.
// temos a capacidade de por varios case associado em uma sentença de codigo