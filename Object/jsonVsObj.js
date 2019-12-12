// Convertendo para um JSON

// json é um formatado de dados. É um formato textual, formato simples para ser lido pelo computador.

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c}}
// convertendo para um Json, formato JSON:
// A funcao foi excluida do JSON, porque o JSON é um formato de dados, não é algo executavel. Formato TEXTUAL!
console.log(JSON.stringify(obj)) // {"a":1,"b":2,"c":3} formato textual


// Criando JSON.

// console.log(JSON.parse("{ a: 1, b: 2, c: 3}")) < nao é dessa forma
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) << nao é dessa forma

// Formato JSON tem que ser com aspas duplas dentro para cada elemento criado, atributo.
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))

// Podemos colocar também esses formatos, string, true, {objeto} [array] que é valido no JSON
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))