
const peso1 = 1.0
const peso2 = Number('2.0') // Mesmo passando uma string, ele é um Inteiro, number
const peso3 = '2.3' // String
console.log(typeof peso2, typeof peso3)

console.log(peso1, peso2)

// Aqui é para ver se é um numero inteiro, se for ele vai dar True.
// Colocando o valor de 1.1 seria um float, então False. Sempre que tiver 2.0, 1.0 é considerado um (int)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

// Fazendo uma operação aritmetica: Avaliacao1 x peso1, + avaliacao2 x peso2
const total = avaliacao1 * peso1 + avaliacao2 * peso2

// criando outra constante, para calcular o total dividido por (peso1 + peso2) --> 7.8709999999999996
const media = total / (peso1 + peso2)

// Aqui o toFixed(2) é o comando para colocar o quanto de casas decimais vc quer que apareça no resultado entre ( o valor ), no caso fica 7.87 
// Lembrando que o toFixed não mexe no valor de media, até porque ela é uma constante.
console.log(media.toFixed(2)) 

/* 
 *Aqui estamos convertendo um valor numerico para uma string
 * media.toString() Colocando so assim já modifica para string. Se passar o numero dois entre parenteses ele retorna um numero binario. 
 *Ficando assim: (111.11011110111110011101101100100010110100001110010101)
 */
console.log(media.toString(2)) //em binario

console.log(typeof media)
console.log(typeof Number)  // É uma função.