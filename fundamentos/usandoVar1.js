// Aqui é acessivel de qualquer lugar do escopo global, do window. 
// já que não foi criado dentro de uma function.

{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}

console.log(sera)

// Criando a função sem passar nada, com uma variavel dentro. So pode ser acessado dentro do escopo da funcao.
function teste() {
    var local = 123
}

teste()
console.log(local)

