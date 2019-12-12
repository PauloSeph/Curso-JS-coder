/* 
-> Break é um desvio de fluxo, o que seria esse desvio de fluxo?
   é sair de um ponto e  pular umas linhas e ir para outro
-> Continue também influencia no desvio fluxo
 ->  Break influencia = Switch, laço for e laço while
 ->  Continue influencia = Laço for e laço while
*/


// criando uma array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// vamos percorrer esse array pelo a partir do for in. Sabendo que o X é o indice do array
for (x in nums){
// vamos fazer um teste, se o x(indice) for igual a 5, ele vai encontrar um break.
// Break ele não age em cima de um bloco if, mas sim de um bloco que esteja mais proximo dele
// o for, switch e o while, entao no caso aqui é o bloco associado o FOR
    if (x == 5) { break }
    // fazendo isso o indice vai apontar para cada elemento até chegar no indice 4.
    console.log(`${x} = ${nums[x]}`)
}



   // Continue vai interromper a repetiçao atual e vai para proxima repeticao.
    // Já que o Continue não age também em cima do if, ele vai agir no mais proximo FOR
    // Interrompendo a execução atual e pulando para proxima, ele não sai do laço,
    // ou seja, quando chegou no indice 5 ele encontrou o continue, pulou para proxima
    // execução, pulou o indice 5 e continuou, até terminar a repetição.
for (y in nums) {
 
    if (y == 5) {continue }
    console.log(`${y} = ${nums[y]}`)
}



// Nao usar isso!!
// Break vai interromper o laço e sair para proxima sentença de codigo fora do laço que
// está relacionado.

// criamos um rotulo (externo)
// Criamos ele para chamar um break for externo, colocando o break externo por exemplo.
externo: for(a in nums) {
    for (b in nums) { 
        // fazendo um teste, se a for igual a 2 e b == 3 ele vai chamar o break.
        // ou seja agora o break externo de vez de agir no interno, no caso o mais proximo
        // ele vai agir no externo, já que foi criado um rotulo e atribuido ao break aqui.
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
        
}