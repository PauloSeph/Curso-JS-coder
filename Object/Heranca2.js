// Cadeia de protótipos (prototype chain)

// E o avo tem o Object.prototype
Object.prototype.attr0 = '0' // Nao faça isso em casa! evitar isso.
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C'}
// no caso mesmo que tenha dois atributo, attr3, ele vai pegar o primeiro no caso o C
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) 
// Lembrando que se passar um filho.attr10 que nao existe ou que nao ache na herança, ele vai dar undefined. 




const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) { // Criar uma funcao chamada acelerarmais
        if (this.velAtual + delta <= this.velMax) { // se a velocidade atual (0) + delta(onde passar o valor) for menor ou igual a velocidade max.
            this.velAtual += delta // Pode acelerar..
        } else { this.velAtual = this.velMax  // Caso ele ultrapasse a velocidade maxima, eu vou forçar a velatual ser igual a maxima
        }
    },
    status() { // template string para mostrar..
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

// Criando outros objetos
const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // vai mostrar o modelo e o super do status.
    }
}


// essa forma e a __proto__ sao as duas oficiais.
Object.setPrototypeOf(ferrari, carro) // ferrari tem carro como seu prototype
// volvo tem carro como seu prototype também. (mesmo que nao passei Velmax para volvo ele vai pegar do carro) já que é herança
Object.setPrototypeOf(volvo, carro) 
console.log(ferrari) // vai imprimir os valores normais do ferrari { modelo: 'F40', velMax: 324 }
console.log(volvo) // { modelo: 'V40', status: [Function: status] }

volvo.acelerarMais(100) // (mesmo que nao passei Velmax para volvo ele vai pegar do carro) já que é herança
console.log(volvo.status())

ferrari.acelerarMais(300) 
console.log(ferrari.status())