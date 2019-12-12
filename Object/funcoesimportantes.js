const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}


// vai pegar todas chaves de um object --> Chaves = keys
console.log(Object.keys(pessoa))

// Vai pegar os valores do object --> Valeus = Valores
console.log(Object.values(pessoa))

// Aqui vai dar uma array com todos sub arrays que vai ter a chave e valor  [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]
console.log(Object.entries(pessoa))



// A partir do forEach vai percorrer os elementos do array que foi gerado a partir do Object.entries
// no caso seria o array que tem duas posicoes, chave e valor.
Object.entries(pessoa).forEach(e => {  
    console.log(`${e[0]}: ${e[1]}`) // template string, indice [0] indice [1] 

})

// Também poderia usar operador destructuring deixando da mesma forma que a cima, porém mais claro.
// Ou seja, os elementos que veio do forEach, está pegando cada um dos elementos e tirando dessa estrutura []
Object.entries(pessoa).forEach(([chave, valor]) => {   
    console.log(`${chave}: ${valor}`) // template string, indice [0] indice [1] 
})



// Seria para definir uma proprieda, no caso pode definir algumas caracteristicas a uma propriedade
// por exemplo: aquela propriedade pode ou nao ser alterada?
// Ficara ou nao visivel quando fizer algo.
// Aqui se passa o target, o object para definir a propriedade, depois nome da propriedade(sempre em aspas '')

Object.defineProperty(pessoa, 'dataNascimento', {  
    enumerable: true, // se ela vai ser listada por exemplo com Object.keys ou coisa do tipo
    writable: false, // Essa é uma propriedade que vai ser modificada. False = nao
    value: '01/01/2019' // E pode atribuir o valor
})

// como colocamos para a propriedade nao ser alterada, entao nao vai acontecer nada aquii
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)

// Aqui vamos chamar o keys, já que está true vai aparecer aqui normalmente
// se fosse false no enumerable ela nao iria aparcer mais na keys
console.log(Object.keys(pessoa))




// Object.assign (ECMAScript 2015)

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c:3, a: 4 }
// ou seja, vai pegar o object (dest) o primeiro que foi passado, e os que vem depois sera concatenado com ele
// no caso o (a) já tinha, entao no o2 sera sobrescrito o valor do a: 1 será a: 4
const obj = Object.assign(dest, o1, o2) // esse obj gerado será concatenação de todos objects

Object.freeze(obj) // aqui fizemos o freeze, para nao ser modificado. 
// Entao aqui nao vai acontecer nada.
obj.c = 1234
console.log(obj) // { a: 4, b: 2, c: 3 }