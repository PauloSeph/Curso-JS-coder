// let e const

{
    var a = 2
    let b = 3
    const c = 5
    console.log(b)
console.log(c)
}
console.log(a)


// Template string

const produto = 'ipad'
console.log(`${produto} 
é 
caro!`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome: o } = { nome: 'Ana', idade: 9}
console.log(i, o)

