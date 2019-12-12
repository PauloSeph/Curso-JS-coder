// NO JS -- so tem um pai que pode ser herança.

// prototype so está dentro de uma funcao!

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}


// O __proto__ representa o Object.prototype.

console.log(ferrari.prototype) // nao porque o objeto nao tem esse atributo prototype, so o __proto__
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype) 
console.log(Object.prototype.__proto__ === null) // Nao, o prototype é o ultimo nivel.

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto) // Function e function
console.log(Object.prototype, MeuObjeto.prototype)

