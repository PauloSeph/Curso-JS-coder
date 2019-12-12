function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // OR
    const comprarTv50 = trabalho1 && trabalho2 // and
    // const comprartv32 = !!(trabalho1 ^ trabalho2) //bitwise xor *bit a bit.
    const comprarTv32 = trabalho1 != trabalho2 //  != diferença também simula o xor.
    const manterSaudavel = !comprarSorvete // Operador unário (! not)
    
    // retornando os valores de cada variavel do objeto
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

