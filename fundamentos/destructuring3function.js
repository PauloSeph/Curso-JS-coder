
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// Aqui estamos usando um object não um destructuring.
const obj = { max: 50, min: 40 }

// e aqui passamos obj como parametro para function(rand), que executando ele vai puxar random de 50 a 40
console.log(rand(obj))

// Outra possibilidade é passar apenas o valor de minimo ou de maximo, 
// ou sejá por padrão ele assumiu o 1000, vai ficar usando random entre 955 ate 1000
console.log(rand({min: 955}))

// somente o object vazio {} ele vai ficar entre 0 e 1000, com numeros aleatorios.
console.log(rand({}))

// E aqui vai dar erro.
console.log(rand())