// vamos criar dentro de prototype de uma array  essa funcao foreach que nao existe e vamos associar a funcao que eu quero que de fato
// vai percorrer a array (callback).
// Dentro da function foreach2, vamos usar o for i = 0, representa os indices, i < tem que ser menor que tamanho do array
// i++ vai acrescentando. Ou seja, vai percorrer do primeiro elemento ao ultimo elemento da array

Object.prototype.forEach3 = function(callback) {
    for (let i = 0; i < this.length; i++) {
// Chamando a funcao callback, primeiro parametro é o proprio valor, segundo o indice, terceiro array completo  // Sao 3 parametros somente.
// Lembrando que ele vai chamar o numero 1 primeiro porque foi passado na funcao de baixo.
        callback(this[i], i, this)  
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach3(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array) // <-- Ele vai chamar o 1 primeiro porque foi passado aqui
}) 

