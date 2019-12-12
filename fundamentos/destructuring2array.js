const [a] = [10]
console.log(a)

// Apartir de uma array colocamos varios elementos.
// Pegamos n1, ignoramos, depois n3, ignoramos, n5, n6 recebeu o 0 como padrão.
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6) // 10 9 undefined 0

// Primeiro elemento aqui foi ignorado, agora na nova array ignorou o primeiro e pegando o segundo (nota)
// o virgula do primeiro array está dizendo: ignore esse primeiro elemento, vá para os segundo.
const [,[, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)