function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// Diferente do object que que precisavamos passar o nome do atributo, min = 0, max = 1000, agora aqui so passamos os valores.
// Ele vai trocar, porque ele passou primeiro o max depois o min.
console.log(rand([50, 40]))

// Aqui ele assumiu o valor de min, já que o max é 1000
console.log(rand([992]))

// Aqui vamos passar o segundo, no caso 10 max, e valor min 0.
console.log(rand([, 10]))

// Aqui passamos um array vazio, ele vai ficar navegando de 0 a 1000
console.log(rand([]))

// Aqui vai gerar um problema, da mesma forma que gerou no object.
// console.log(rand())




















