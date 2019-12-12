// Formas diferente de usar object
// Lembrando que no Node temos modulo que é o arquivo, global e o da function.
// Let e const somente no bloco.


// 1- forma é usando a notação literal
const obj1 = {}
console.log(obj1)

// 2- forma --> Object em JS --> que ele é uma function
console.log(typeof Object, typeof new Object)

const obj2 = new Object
console.log(obj2)



// 3- forma Funções construtoras -- é igual a de cima porém fazendo a function e chamando a var.
// Quis tornar a variavel nome publica, ela nao esta escondida(encapsulada) no objeto, ela está fora. Podemos alterar fora do produto.
// Agora preco e desc está encapsulado, nao vamos exibir ele para fora.
function Produto(nome, preco, desc) {
    this.nome = nome 
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }

}
// Passando novo Produto, nome, preco, e desc(15%)
const p1 = new Produto('Cameta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2988.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


// 4 - Função Factory --> é uma padrao de object.. ele fabrica um object
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {                    // Funcao para calcular as faltas em base dos dias trabalhados.
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}



// Criando objects a partir da função.
//    f1 recebe variavel, nome, salarioBase e faltas.
const f1 = criarFuncionario('João', 7980, 4)
console.log(f1)
//    f1 recebe variavel, nome, salarioBase e faltas.
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())


// 5- Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)



// Uma funcao famosa que retorna Objeto.. (falaremos depois sobre)
const fromJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJson.info)
