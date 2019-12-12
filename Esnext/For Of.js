for (let letras of "Cod3r") {
    console.log(letras)
}


const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
    console.log(assuntosEcma[i])
}


for (let assunto of assuntosEcma) {
    console.log(assunto)
}


const assunstosMap = new Map( [
    ['Map', { abordado: true }],
    ['Set', { abordado: true}],
    ['Promise', { Abordado: false}]
])

// Retornando Chave e valor
for (let assunto of assunstosMap) {
    console.log(assunto)
}


// Somente a chave
for (let chave of assunstosMap.keys()) {
    console.log(chave)
}

// Os valores
for (let chave of assunstosMap.values()) {
    console.log(chave)
}

// Usando entries, retornando chave e valores separados, usando operador destructuring.
for (let [ch, vl] of assunstosMap.entries()) {
    console.log(ch, vl)
}


const s = new Set (['a', 'b', 'c'])

for (let letra of s) {
    console.log(letra)
}

// Tem a possibilidade de destruturar tambem aqui pegando a chave e o valor.

for (let [chave, valor] of assunstosMap) {
    console.log(chave, valor)
}
