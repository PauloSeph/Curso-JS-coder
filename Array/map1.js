// Map serve para fazer uma transformaçao numa array, mapear a array atual para uma outra array.
// POr exemplo aqui, temos a array com os numeros e passamos o map para transforma ela em o dobro dos valores da array
// Vai percorrer cada um dos elementos, e o resultado final dessa transformacao usando map é uma outra array do mesmo tamanho
// com os dados transformados.
// Regra: se a Array original tiver 6 elementos, ele vai gerar outra com 6 elementos so que com os dados transformados.
// Map nao transforma o array atual, nao causa modificao, somente gera um novo array.
const nums = [1, 2, 3, 4, 5]

// For com propósito
// essa funcao pode receber 3 parametros:  valor atual, indice, e o array completo
let resultado = nums.map(function(e) { // Passamos o valor atual
    return e * 2   // vamos fazer o dobro do elemento atual, os valores vezes 2, poderia multiplicar por 10, 20, etc..
})

console.log(resultado, nums)




// Lembrando que function arrow tem return implicito
// temos soma10 funcao, que recebe e(elemento), transforma o e(elemento) + 10
const soma10 = e => e + 10
const triplo = e => e * 3


const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

// aqui chamamos o map de forma encadiada.
// Já que o primeiro resultado é um array, pode chamar o map denovo
// ele vai fazendo toma soma, multiplicacao e a conversao tudo junto
// podemos trocar a ordem também, porem será outro resultado
resultado1 = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado1)

