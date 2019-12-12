var a = 3
let b = 4

// Aqui consegue redeclarar o var duas vezes sem dar erro.
// Já o let não.
var a = 30
b = 40

console.log(a, b)

// Ou sejá, você declara a variável depois usa quantas vezes quiser, e pelo fato de ser var, pode ir mudando o valor.
a = 300
b = 400

console.log(a, b)


// também sobrescreve o valor
let ar = 10
ar = 20
console.log(ar)


const c = 5
// c = 50
console.log(c)



