console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'teste'
}


console.log(module.exports)

module.exports = { publico: true}

// this e exports apontam para module.exports
// então so no module.exports pode chamar um objeto { e passar valores}