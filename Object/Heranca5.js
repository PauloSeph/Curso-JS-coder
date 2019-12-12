// O que queremos chamar a atençao aqui é que os 3, tem o atributo chamado .prototype, porque toda function tem um atributo chamado .prototype
console.log(typeof String) // String é uma function
console.log(typeof Array)  // Function
console.log(typeof Object)  // Function



String.prototype.reverse = function () {

    return this.split('').reverse().join('')
} 





console.log('Escola Cod3r'.reverse())  // r3doC alocsE

// first é para pegar o primeiro elemento da array, mas nao tem.. porém podemos adcionar.
Array.prototype.first = function() {
    // Aqui estamos acessando a array a partir do -> This
    // Pegando o primeiro elemento da array e retornando.
    return this[0]  
}

console.log([1, 2, 3, 4, 5].first()) // vai retornar o primeiro elemento da array
console.log(['a', 'b', 'c'].first()) // o mesmo que de cima. 



// Ter cuidado para nao fazer isso, sobrescrever o comportamento de toString.
String.prototype.toString = function () {
    return 'Lascou Tudo'
}


console.log('Escola Cod3r'.reverse())

//testes
console.log('Escola'.toString(2))

console.log('2jacara'.toUpperCase())