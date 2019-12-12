function MeuObjeto() {}
console.log(MeuObjeto.prototype)

// quando criar um object a partir de uma function construtora usando (new MeuObjeto), o prototypo desse obj, automaticamente
// aponta para a funcao que se criou .prototype.. MeuObjeto.prototype.
// Aqui criamos uma function, nao um objeto literal... entao:
// Nao Object.prototype, mas sim funçao.prototype. Que é quando se cria um object a partir do new Object ou a partir do object literal {}
// por padrao o prototype é o Object.prototype.
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
// obj1 proto é estritamente igual a obj2 proto?
console.log(obj1.__proto__ === obj2.__proto__) // True
console.log(MeuObjeto.prototype === obj1.__proto__) // True


// Vamos atribuir um valores
// O que significa que qualquer objeto que for criado a partir dessa function construtora, vai ter dentro dele um Pai dele(no prototype desse obj)
// vai ter o atributo nome, em outras palavras vamos conseguir acessar esse atributo.
MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar() // Bom dia! Meu nome é Anônimo!
// vamos sobrescrever o nome.
obj2.nome = 'Rafael'
obj2.falar() //  Bom dia! Meu nome é Rafael!

const obj3 = {}
// Aqui estamos mudando o proto do object para a function.prototype, entao ele vai ter acesso aos atributos da function MeuObjeto.
// Como o --> nome e a function que foi criado --> (falar)
obj3.__proto__ = MeuObjeto.prototype
console.log(obj3.__proto__ === MeuObjeto.prototype) // Aqui vemos que os dois sao iguais.
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura...

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // True
console.log(MeuObjeto.__proto__ === Function.prototype) // True 
console.log(Function.prototype.__proto__ === Object.prototype) // True

// Null, POrque chegou no Object.prototype, nao tem mais nada na cadeia de prototype.
console.log(Object.prototype.__proto__ === null) 