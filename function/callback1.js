const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    // indice + 1, é o indice mesmo, começando pelo 1 da array, e depois os nomes mercedes, audio, bmw cada um com seu indice.
    console.log(`${indice + 1}. ${nome}`)
}

// Foreach usado para callback, para cada um dos elementos percorridos no array chama o elemento e o indice
// encontrou outro elemento e chama o callback denovo, elemento e indice, para cada elemento vai fazendo isso. (chamando a funcao)
// Ou sejá, se passa a funcao e ele chama de volta. 
fabricantes.forEach(imprimir)

// frabricante é o array toda, todos elementos.
fabricantes.forEach(fabricante => console.log(fabricante))

