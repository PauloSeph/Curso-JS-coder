

// contexto léxico 1
const saudacao = 'Opa'  

// contexto léxico2 (funcao)
function exec() {
    const saudacao = 'Falaa' 
    return saudacao
}


// Objetos são grupos aninhados de pares nome/valor 
const client = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        nome: 'Ruan',
        idade: 12
    }
}

console.log(saudacao)
console.log(exec())
console.log(client)


