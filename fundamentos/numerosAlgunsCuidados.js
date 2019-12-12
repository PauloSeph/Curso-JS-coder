//infinity (dara um numero infinito) Mas nao gera um erro.
console.log(7 / 0) 

// Já aqui ele dividiu, transformando o 10 pelo um int
console.log('10' / 2) 

// Aqui concatenou (Já que faz sentido no mundo da string) (A string ganha)
console.log('10' + 2) // R: 102

// Se fosse ao contrario, uma subtração, ele iria fazer uma conta, mas nao uma concatenação.
console.log('10' - 2) // R: 5

//Nan (nao funciona)
console.log('10,2' / 2)   

//Nan (nao funciona)
console.log("Show!" * 2) 

// Aqui gera uma imprecisão  R: 0.7999999999999999 (Ter cuidado por causa da imprecisão)
console.log(0.1 + 0.7) 

// Invalid or unexpected token, nao consegue dessa maneira.
// console.log(10.toString()) (NAO FUNCIONA)

// Dessa maneira vai, o 10 está entre ().
console.log((10).toString()) 

// com o fixed tb funciona.
console.log((10.356).toFixed(2))

// Assim conseguiria também, ja que media é um variavel de um int.
console.log(media.toString()) 

