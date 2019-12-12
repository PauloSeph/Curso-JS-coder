let num1 = 1
let num2 = 2

// forma pós fixada, aqui ele vai acrescentar 1.
num1++
console.log(num1) // vai dar 2

// pre-fixada. // Tanto faz por o ++ antes ou depois, -- antes ou depois.. ambos suportao
// Aqui tem mais preferencia, já que ta pré fixada, então é mais rapido para o sistema resolver.

// Subistituindo o valor de num1 para usando a forma pre-fixada, resultando no valor atual = 1
--num1
console.log(num1)

// Aqui vai dar true, porque o incremento veio antes da comparação, no caso num1 =2, e o num2 que era 2, so vai decrementar quando depois que comparar.
console.log(++num1 === num2--) // True
console.log(num1 === num2) //False
