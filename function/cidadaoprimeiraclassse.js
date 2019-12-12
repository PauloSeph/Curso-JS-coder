// funcao em JS é First-class Object (citizens)
// Higher-order function


// Funcão pode receber parametros e pode retornar um valor. É opcional return, se não colocar nada ele volta undefined
// explicitamente quando colocar o return, ele vai retorna aquilo que vc passou dentro do return.
// Dentro dos parenteses() passa os parametros, e no bloco da funcão {corpo} onde coloca as sentenças de codigos.

// -->>> 1. Criar de forma literal
function fun1() { }

// -->>> 2. Armazenar em um variável
// essa function é anonima
const fun2 = function () { }

// -->>> 3. Armazenar em um array
// pode armazenar direto a funcão na construção do array, ou pode puxar os parametros dela, no caso acessando nome dela, fun1 que é a forma literal
// ou apartir da const fun2 que recebeu uma function anonima
const array = [function (a, b) { return a + b }, fun1, fun2]
// para executar a funcao é simples, passando o array[0] indice 0, e valores 2 e 3 para somar.
console.log(array[0](2, 3))


// -->>> 4. Armazenar em um atributo de object
// cria um object vazio
const obj = {}

obj.falar = function () { return 'Opa'}
// Chamando a function
console.log(obj.falar())



// -->>> 5. Passar funcão como parametro para outra funcao.
// Criei uma funcao chamado run, recebe como parametro o chamado fun, que esperamos receber uma funcao.
function run(fun) {
    // Aqui estamos executando a funcao de baixo, dentro da funcao run, lembrando de por parenteses ()
    fun()
}

run(function () { console.log ('Executando...')})


// -->>> 6. Uma function pode retornar/conter uma function
// Criamos um funcao com dois valores a, b
function soma(a, b) {
    // function soma vai retornar uma outra function que recebe um terceiro parametro/valor (c)
    return function (c) {
        console.log(a + b + c) // que ai vai mostrar a soma de a + b + c
    }
}

// Executando para somar os 3 valores, 2 possibilidades
// Soma passou 2,3 que é da function, e a function que está dentro dela recebe ( também )
//   a  b  c
soma(2, 3)(4)
// ou Fazendo assim também executaria.
const cincoMais = soma(2, 3)
cincoMais(4)