const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcatual) => {
    return func.salario < funcatual.salario ? func : funcatual
}





axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
// mulher chinesa com menor salário
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
    
    console.log(func)
})



