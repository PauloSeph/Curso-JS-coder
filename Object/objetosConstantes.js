// Pessoa aponta para um endereço de memoria --> 123 e o endereço --> { aponta para o objeto} // o numero é uma abstração para referencia.
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// Pessoa vai receber um novo objeto. Pessoa -> 456 -> {...}
// Voce ta tendo fazer com que a variavel pessoa aponte para um novo endereco. Ou seja ela vai somente apontar para 123, 456 seria outro endereco.
// pessoa = { nome: 'Ana'}

// Aqui estamos congelando o object pessoa
// OU seja, nao deixe ninguem excluir atributos, adicionar, nem mexer nos dados que já existem.
Object.freeze(pessoa) // daqui para frente, da linha 11 até diante vai congelar.

pessoa.nome = 'Maria' // Ou seja isso aqui nao vai ser alterado.
pessoa.end = 'Rua ABC' // também nao funciona.
delete pessoa.nome // também nao.
console.log(pessoa.nome)
console.log(pessoa)
// Nao pode alterar um atributo que existe, nao pode adcionar, excluir, acabamos de torna um object em si uma constante.




// se quiser criar um object desde o começo que ele seja const:
// Nem a referencia, nem o object pode ser mudado.
const pessoaConstante = Object.freeze ({ nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)