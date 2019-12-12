// Object.preventExtensions
// Vai previnir, nao vai permir que seu objeto seja extendido, nao poderemos adicionar novos atributos, mas sim excluir.

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao' // criamos 3 atributos para esse object
})

console.log('Extensível:', Object.isExtensible(produto)) // ela vai testar para ver se é extensivel, se foi criado com extensions ou nao.

//Obs: nao podemos adicionar novos valores, chave e valor

// Aqui tentamos alterar um nome, um atributo que já existe.. nao tem problema. Vai permitir.
produto.nome = 'Borracha' 
// atributo (Descricao) nao existe no nosso object, entao nao vai ser nada alterado
produto.descricao =  'Borracha escola branca' 
// Aqui estamos deletando o atributo tag, que podemos fazer. E entao será removido
delete produto.tag
console.log(produto)



// Object.seal
// Nao conseguimos adcionar novos atributos chave/valor, nem excluir, mas conseguimos mexer nos atributos que já existem.
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // Aqui estamos testando para ver se realmente está selado.

pessoa.sobrenome = 'Silva' // como sobrenome nao temos, entao nao podemos mexer 
delete pessoa.nome  // aqui tb nao pode ser modificado
pessoa.idade = 29 // ja que temos o atributo idade, podemos sim modificar.
console.log(pessoa)


// Object.freeze = selado + valores constantes
// Ja mostramos anteriormente, nao conseguimos adicionar novos valores, excluir ou modificar, ela é constante!


// Resumindo:
Object.preventExtensions // Remove e modifica um atributo existente.
Object.seal // somente modifica um atributo existente
Object.freeze // Nao pode fazer nada, constante.