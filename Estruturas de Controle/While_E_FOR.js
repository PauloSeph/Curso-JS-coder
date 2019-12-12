// contador é a variavel que vai controlar o laço.
let contador = 1

// 1 menor ou igual a 10 a expressão é true, OU sejá até 10 é true, passando disso é False e sai do laço
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    // Passando o ++ ele é o incremento 1, entao no caso se chegando a 11, entao faz que a expressão de false, saindo do laço
    contador++
}



// Da Mesma forma que o while vai repetir 10x, aqui faremos da mesma forma usando o for
// Passando variavel, e a expressão, i for menor ou igual a 10 = true, se não sai do laço, e o ++ acrescenta 1, no caso dará 11 para sair do laço
for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}





// Também podemos percorrer o array, seguindo com o for a cima.
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

/* expressão i menor que notas.lenght --> lenght quer dizer comprimento do array, modo para ver o tamanho do array
  * aqui estamos dizendo o seguinte:
  * comece a partir do 0, já que uma array começa a partir do indice 0, a variavel i sempre será menor que notas.lenght (tamanho do array)
  * o tamanho do array é 5 elementos, entao o i no caso vai até 4, ja que começa pelo indice 0.
  */
for(let i = 0; i < notas.length; i++)
// Pegando todos elementos do array, ali [i] << acessando o indice i, dessa forma vamos acessar cada elemento da array
    console.log(`nota = ${notas[i]}`)

// Ou sejá é uma forma de navegar em cima de um array, usando notas.lenght, usando a propriedade do array, para que ele possa
// ir navegando um array até chegar no tamanho do array, depois que chegou ao final do tamanho ele sai do laço. 
// do primeiro elemento ao ultimo elemento.