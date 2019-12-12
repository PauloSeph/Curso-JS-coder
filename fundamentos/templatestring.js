const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

// Mostrando de como é String template, abrindo com simbolo da crase `
// Subistituiu a variavel nome dentro do texto porque colocou o $ {} Entre chaves e o nome da variavel
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressoes... (aqui conseguimos fazer um calculo dentro da string template)
// interpolando ${1 + 1}, interpretando.
console.log(`1 + 1 = ${1 + 1}`)


// Aqui foi atribuido uma funcao toUpperCase para variavel up, que se tornou também uma funcão.
// 
const up = texto => texto.toUpperCase()

// Aqui colocando um texto, $chamando o up da função que vai aumentar. ficando: Ei... CUIDADO!
console.log(`Ei... ${up('cuidado')}!`)

console.log(`Nossa ${up('MANO')}!`)