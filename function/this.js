
const getPreco = (imposto = 0, moeda = 'R$') => {
    return `${moeda} ${produto.preco * (1 - produto.desc) * (1 + imposto)}` 

}

          

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15, 
    getPreco  
}

global.preco = 20
global.desc = 0.1 
console.log(getPreco()) 
console.log(produto.getPreco()) 



const carro = { preco: 49990, desc: 0.20}


console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))



console.log(getPreco.call(carro, 0.17, '$'))

console.log(getPreco.apply(carro, [0.17, '$']))


console.log(getPreco.call(produto, 0.0, '$'))


console.log(getPreco.apply(global, [0.17, '$']))


const pessoa = {
    saudacao: 'Bom dia!',
     falar() {
        console.log(this.saudacao)
	   console.log(this === pessoa) 
    }
}
pessoa.falar()

