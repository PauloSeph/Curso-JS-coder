// Não apontam para o this.
console.log(this === global)
console.log(this === module)

// apontam sim
console.log(this === module.exports)
console.log(this === exports)

function logthis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    this.perigo = '....'
}

logthis()