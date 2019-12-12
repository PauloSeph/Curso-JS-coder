// estrategia 1 para gerar valor padrao

// o || é o (or) no caso portugues o ou
// No caso o || ta fazendo que  o 1 se torne o valor padrão.
function soma1(a, b, c) {
    // a recebe a ou(||) valor 1, é dessa forma que é lido.
    a = a || 1        // ou sejá, o a se for false assume o valor padrão que aqui é o 1.
    b = b || 1
    c = c || 1
    return a + b + c
}
// como nao passou nada ele vai assumir o valor padrao. já que undefined é false
console.log(soma1())

// aqui vai pegar o valor somente do a, e passar o padrao do b e c dando = 5
console.log(soma1(3))
// passei todos valores, entao será --> 6
console.log(soma1(1, 2, 3))
// zero é False, entao vai assumir todos valores.
console.log(soma1(0, 0, 0))

// Estrategia 2, 3 e 4 para gerar o valor padrao.
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // 2
    b = 1 in arguments ? b : 1  // 3
    c = isNaN(c) ? 1 : c        // 4
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrao do ES2015// mais conselhavel usar.

function soma3(a = 1, b = 1, c = 1) {     // << 5 Estrategia e melhor.
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))