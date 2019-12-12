const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40
console.log(prod1)


// Criando um objeto com outros objetos dentro
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: { 
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)

// Tentando criar objeto dentro de objeto seguindo exemplo 1.
const prod3 = {}
prod3.arroz = 'Branco'
prod3.feijao = 'Branco'
prod3.Alimentos = {}
prod3.Alimentos.beijo = 'peixe'
console.log(prod3)
