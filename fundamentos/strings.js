const escola = "Cod3r"

// Significa que vai dar a letra do indice 4 dentro da string. Lembrando que começa pelo 0
console.log(escola.charAt(4)) // R: r

// Aqui simplesmente não vai aparecer nada, pois não há nada no indice 5
console.log(escola.charAt(5)) 

// Ou sejá não pegou em si o caractere, mas sim o codigo desse caractere (3) apartir do charcodeat
// Aqui é o codigo da tabela unicode com relação ao indice 3, que é 51. https://unicode-table.com/pt/#0033 
console.log(escola.charCodeAt(3)) 

// Vai falar que indice está a string "3" no (Cod3r), no caso o 3 está no indice 3.
console.log(escola.indexOf('3'))

// Aqui vai pegar apartir do indice 1 até o final (od3r)
console.log(escola.substring(1))

// Da mesma maneira que o de cima, porém pegando do indice 0 ate o indice 3, sem contar o 3. R: Cod
console.log(escola.substring(0, 3))


// Fazendo concatenação  String + Vareável + string.  R: Escola Cod3r!
// Dessas duas formas funcionam.
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")


// Aqui pegou o numero 3 e trouco pelo e  R:Coder
console.log(escola.replace(3, 'e'))

// SOBRE RegExp (é Muito bom)
// Poderia fazer dessa maneira. Expressão regular, no caso para saber mais: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
console.log(escola.replace(/\d/, 'e'))

// Dessa maneira subistituiu tudo pela letra e R: eeeee
console.log(escola.replace(/\w/g, 'e'))


/* 
 * Aqui conseguimos pegar as strings separadas por virgulas para transforma em array.
 * basta chamar a função .split e entre (usar como separador para gerar a array)
 * No caso usamos a virgula para fazer o separador, para gerar a array
 * Quebrando a string a partir da virgula R: [ 'Ana', 'Maria', 'Pedro' ]
*/ 
console.log('Ana,Maria,Pedro'.split(','))

// Com RegExp, dará o mesmo resultado.
console.log('Ana,Maria,Pedro'.split(/,/))

