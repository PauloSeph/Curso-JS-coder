// Aqui está comparando o valor, não o tipo
console.log('1)', '1' == 1)

// Com === é diferente, ele ta falando '1' é estritamente igual a 1? esse compara o tipo, no caso 1 string e o outro 1 é um int
console.log('02)', '1' === 1)

// Aqui '3' é != (diferente) de 3? não, False (aqui nao ta comparando o tipo tb)
console.log('03)', '3' != 3)

// Aqui temos o estritamente (diferente) !== 3 (aqui leva em consideração o tipo)
console.log('04)', '3' !== 3)


// Os classicos, o 3 é menor que 2  False
console.log('05)', 3 < 2)

// 3 Maior que 2  True
console.log('06)', 3 > 2) 

// 3 <= 2, é menor ou igual a 2, False
console.log('07)', 3 <= 2)

// 3 >= 2  é maior ou igual a 2? True
console.log('08)', 3 >= 2) 


// 0 significa a data de referencia que é primeiro de janeiro de 1970, depende do fuso horario 
const d1 = new Date(0)
const d2 = new Date(0)

// Não vai fazer diferença usar o == ou ===, já que está comparando um endereço de memoria
// ambos iram dar false
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)


// Ambos vai dar verdadeiro, === ou ==, porque nesse caso vou estar comparando um number e vai dar o valor em milisegundos
// desde a data de referencia até hoje, entao como são numbers vai funcionar.
// Eles tem o mesmo tipo e o mesmo valor.
console.log('11)', d1.getTime() === d2.getTime()) 

console.log('12)', undefined == null) // True
console.log('12)', undefined === null) // False

// É bom usar o estritamente para comparar valores.

const b = 1 
const a = 2

