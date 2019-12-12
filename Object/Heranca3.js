const pai = { nome: 'Pedro', corCabelo: 'preto'}


// Passando o pai como parametro e ele criou um objeto novo tendo como propotype o objeto pai que foi passado
// entao de vez de criar já apontando para Object.prototype, automaticamente ele ja criou objeto filha tendo prototype o objeto pai
const filha1 = Object.create(pai) 
filha1.nome = 'Ana'

// Object.create define o prototypo que passou como parametro ele já consegue localizar o atributo a partir do Pai(prototypo que foi definido)
// a partir do filha1 Object.create(pai)
console.log(filha1.corCabelo) 

// Filha2 já vai ter acesso ao Pai, já que ta como prototype, entao vamos criar outros atributos nele, inclusive se vai ser inumerados, congelado..
// Pai aqui é o 1 parametro e no segundo parametro{ vamos criar outro objeto}
const filha2 = Object.create(pai, { 
    // valor: bia, writable ele nao vai ser mudado, enumerable --> vamos poder usar Object.keys por exemplo
    nome: { value: 'Bia', writable: false, enumerable: true} 
})

console.log(filha2.nome) 
// tentar mudar o nome de filha2 para carlar. Porem nao vai dar certo, já que colocamos para nao writable, nao editar.
filha2.nome = 'Carla' 


// Já que a herança é do pai, entao ele vai pegar o (preto) --> Bia tem cabelo preto
// template string
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) 

console.log(Object.keys(filha1)) //  podemos ver que os dois tem o nome [ 'nome' ], se o enumerable fosse false, ele nao iria aparecer
console.log(Object.keys(filha2))



// no caso se nao tivesse passado nome = ana para filha1, ele nao iria aparecer nada, porque nao lista como padrao.
for(let key in filha2) {  // Desse jeito vai mostrar os dois, o nome e corCabelo
    console.log(key)
}


// Dessa forma sabemos se um determinado atributo que esta navegando pelo forin ele pertence ao proprio object
// ou se ele veio por herança.
for(let key in filha2) {  
    // Fazendo um teste..
    // Ou seja, ela tem aquela propriedade, pertence a ela?
    filha2.hasOwnProperty(key) ?  // Ou seja aqui retorna true e passa o --? nome que pertence ao object filha2
    // se pertencer a ela, se nao: template string
    console.log(key) : console.log(`Por Herança: ${key}`) // e aqui vai passar o Corcabelo que é a heranca
}

