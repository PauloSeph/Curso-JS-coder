const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']


// Foreach 1 parametro elementos, 2 - indices, 3 - array completo.

// a funcao Recebe dois parametros, 1 parametro é o proprio elemento e o segundo é o indice que está sendo executado naquele momento.
aprovados.forEach(function(nome, indice) {
    // Dessa maneira ele vai imprimir o indice primeiro e depois o elemento da array, percorrendo cada indice e colocando seu nome
    console.log(`${indice + 1}) ${nome}`)
})

// Aqui vamos imprimir somente os nomes, ja que so passamos um parametro ele nao vai imprimir os indices
// embora o indice é passado ele vai ser ignorado por esse metedo.
aprovados.forEach(nome => console.log(nome))


// Outra alternativa: Armazenar uma funcao em uma vareavel, e passar essa funcao por parametro para o forEach

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

// poderia ter usado o indice também.
const exibirAprovados1 = (aprovado, indiceaqui) => console.log(indiceaqui, aprovado)
aprovados.forEach(exibirAprovados1)


// Aqui também percorreu o 3 parametro que é a array
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})
