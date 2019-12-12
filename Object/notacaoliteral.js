// Notacao literal de object

const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b:  b, c: c} // Antigamente usavamos assim
const obj2 = {a, b, c} // POdemos usar assim hoje em dia, criando variaveis antes e atribuindo.
console.log(obj1, obj2)

// da mesma forma que foi feito em cima da para fazer dessa forma:
const nomeAttr = 'Nota'
const valorAttr = 7.78

const obj3 = {} // obj vazio
obj3[nomeAttr] = valorAttr //Chamando NomeAttr(nota) e passando o valorAttr(7.78)
console.log(obj3)

// dessa maneira também, diretamente {Passando as variaveis aqui dentro}
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)


const obj5 = {         // FORMA TRADICIONAL
    // chave(funcao1) recebe function anonima.  
    funcao1: function () { // como definir funcoes também obj literal, essa é a forma antiga.
        //...
    },
    funcao2() {        //Hoje em dia da para fazer dessa maneira, nao precisa por os dois pontos e function
        //... Forma mais reduzida.   // FORMA Adicionada depois 2015
    }

}

console.log(obj5)