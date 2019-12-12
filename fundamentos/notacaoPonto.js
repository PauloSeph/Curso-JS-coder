// Ceil - Operar um aredondamento.
// Math é um object, voce acessa usando a notacao ponto . para acessar uma função
// definida dentro desse objeto.
console.log(Math.ceil(6.1))


const obj1 = {}   
// As duas linhas são equivalentes, está adicionando um valor para a chave do objeto.
obj1.nome = 'Bola'
obj1['nome'] = 'Bola2'
console.log(obj1.nome)


// Apartir do this usando anotacao ponto, consegue criar atributos, como funções que seram
// expostas para fora dessa sua function, ou sejá do bloco.
function Obj(nome) {
    this.nome = nome         //Criando atributos apartir do this
    this.exec = function() {  //criando Function apartir do this
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
// Usa a notacao ponto para acessar os produtos que estão visiveis em determinados objetos.
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()