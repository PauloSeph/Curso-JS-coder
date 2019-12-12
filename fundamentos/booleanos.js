// Usando literal false, para determinar o false.
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)


// !! negação duas vezes, para saber se o valor é false or true
isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)

// Com um espaço vazio ele tb True
console.log(!!' ')

// Dessa forma também dará True
console.log(!!'Arroz')

// UM array vazio também é True
console.log(!![])

// Um objeto literal
console.log(!!{})

//Tipo infinito
console.log(!!Infinity)
console.log(!!(isAtivo = true)) 

// Agora situaçoes que resolvem para False
console.log('os falsos...')
console.log(!!0)
console.log(!!'') // String Vazia
console.log(!!null) // Nulo se resolve para False
console.log(!!NaN) // Not a number -- False
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar...')
// Aqui estamos fazendo False ou False ou False ou True
// o simbolo || ta dizendo ( ou )
console.log(!!('') || null || 0 || 'Epa ') 


let nome = 'lucas'
console.log(nome || 'Desconhecido')