// Criando uma função com return.
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


let opcao = 0
// Criar um laço de repetição. Quantidades indeterminadas de repetições e determinadas. Aqui é indeterminada.
// Precisa de uma expressão True ou False, ou sejá, enquanto a expressão for true continue executando o laço até que a expressão fique false

while (opcao != -1) {
    // vai gerar um numero aleatorio entre -1 e 10, quando der -1 ele sai do laço, se for qualquer outro valor ele vai executando o laço até dar -1
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}.`)
}

console.log('Até a proxima!')