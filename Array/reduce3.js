// Estamos fazendo isso para saber como é o funcionamento interno do reduce


Array.prototype.reduce2 = function(callback) {
    // definindo o acumulador, this indice 0
    let acumulador = this[0]
    // vamos percorrer o array a partir do indice 1 e nao do indice 0, já que o acumulador primeiro indice
    // vai ser 0, já que nao passei um valor inicial, entao estamos usando o primeiro elemento para ser o elemento inicial.
    for (let i = 1; i <this.length; i++) {  // i < this.length, indice tem que ser menor que o tamanho do array; e acrescentar i++
         // atribuir ao acumulador o resultado da callback, passando (acumulador atual), this[i](valor atual) que esta percorrendo no array
         // passando o i(indice) e o this(array)
    
        acumulador = callback(acumulador, this[i], i, this)
} return acumulador
 }

 const soma = (total, valor) => total + valor
 const nums = [1, 2, 3, 4, 5, 6]
 console.log(nums.reduce2(soma))



 // considerando o valor inicial

Array.prototype.reduce3 = function(callback, valorInicial) {
    
    // se valorInicial estiver setado significa que o indice inicial vai ser 0, se nao estiver setado vai ser 1
   const indiceInicial = valorInicial ? 0 : 1
   // se o valor de acumulador inicial for = valorInicial ou primeiro elemento do array
    let acumulador = valorInicial || this [0]
    // vamos percorrer o array a partir do indice 1 e nao do indice 0, já que o acumulador primeiro indice
    // vai ser 0, já que nao passei um valor inicial, entao estamos usando o primeiro elemento para ser o elemento inicial.
    for (let i = indiceInicial; i <this.length; i++) {  // i < this.length, indice tem que ser menor que o tamanho do array; e acrescentar i++
         // atribuir ao acumulador o resultado da callback, passando (acumulador atual), this[i](valor atual) que esta percorrendo no array
         // passando o i(indice) e o this(array)
    
        acumulador = callback(acumulador, this[i], i, this)
} return acumulador
 }

 const soma1 = (total, valor) => total + valor
 const nums2 = [1, 2, 3, 4, 5, 6]
 console.log(nums2.reduce3(soma1, 21))
