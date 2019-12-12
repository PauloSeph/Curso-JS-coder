// função sem retorno.

// colocar bons nomes nas funçoes!
// Nota-se que não coloquei nada de let, var, const nas variaveis a e b.
// simplesmente coloquei os nomes das variaves que quereco receber da minha função.
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Passando so um parametro ele: NAN (not a number)
imprimirSoma(2) 

// Aqui vai pegar os dois primeiros e ignorar o resto.(nao vai dar erro)
imprimirSoma(2, 10, 4, 5, 6, 7) 

// Aqui vai dar NaN também.
imprimirSoma() 


// Função com retorno
// Passando duas variaveis a e b = 1, falando que por padrão ele é 0 quando não for passado na chamada da função.
// Trantando do b para receber um valor padrão.
function soma (a, b = 1) {
    return a + b           // aqui retorna o resultado dessa função.
}

console.log(soma(2, 3))
console.log(soma(2)) 
console.log(soma())