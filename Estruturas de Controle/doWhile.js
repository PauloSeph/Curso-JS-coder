// Criando uma função com return.

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1 // mesmo que sejá -1, obrigatoriamente ele vai executar a primeira repetição. Até porque a expressao está fora do bloco

// Aqui vamos passar o while para fora do bloco e por o "do" no começo
// Essa é a unica estrutura de controle onde a expressão está fora do bloco.

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}.`)
} while (opcao != -1) // << expressão continuedade do bloco está depois

console.log('Até a proxima!')