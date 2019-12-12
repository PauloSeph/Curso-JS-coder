// Funcao construtora.

function Aula(nome, VideoID) {
    this.nome = nome,
    this.videoID = VideoID
}

// Usando o operador new e instanciar Objetos, Aula1 e aula2 a partir dessa funcao.
const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)



// Aqui estamos mostrando da forma de cima como fica por baixo dos "Panos" a como ele se comporta, dando o mesmo resultado em ambos
// simulando o new, seguindo a mesma logica do new
function novo(f, ...params) {
    const obj = {} // criamos um object novo, da forma literal, notacao literal.
    obj.__proto__ = f.prototype // assosiamos prototype do obj, ao prototype da funcao que passei
    f.apply(obj, params) // chamamos funcao.apply, ou seja vai executar a funcao F, passando o obj criado e o params(parametros)
    return obj // returna o objeto criado a partir da funcao.
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)

console.log(novo.__proto__ === Function.prototype)