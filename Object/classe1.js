class Lancamento {
    // Lembrando que essa class é transformada em uma function construtora, entao os parametros é constructor(valores.)
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}


class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
// criando uma funcao, um ou mais lancamentos e no final ele concatena com os outros parametros em um array (... rest)
    addLancamentos(...lancamentos) {
        // vai chamar o parametro lancamentos da funcao, e fazer um forEach nos elementos
        // l é os elementos que o foreach fez, e o this.lancamentos é o array da funcaoCiclofinanceiro, nisso ele vai fazer
        // push, onde vai puxar os elementos que for passado por parametro na funcao addLancamentos e colocar dentro do array
        lancamentos.forEach(l => this.lancamentos.push(l))
        }

        sumario() {
            let valorConsolidado = 0
            // para cada lancamentos eu vou somar ao valor consolidado, fazendo uma atribuicao aditiva +=
            this.lancamentos.forEach(l => {
                valorConsolidado += l.valor
            })
            return valorConsolidado
        }
}
// Com isso vai fazer um Foreach nos elementos do array this.lancamentos, e atribuir para valorConsolidado, l = elementos, valor.. entao vai pegar
// lancamentos.valor que é o valor do array lancamentos, e passar para valor consolidado, ele vai retornar o valorconsolidado.
// Lembrando que no forEach o primeiro parametro ele busca os elementos, como passamos elementos.valor é somente o valor que iremos usar.



const salario = new Lancamento('Salario', 45000)
const ContaDeLuz = new Lancamento ('luz', -220)

const contas = new CicloFinanceiro(6, 2018)

contas.addLancamentos(salario, ContaDeLuz)

console.log(contas.sumario())


console.log(contas)

console.log(salario, ContaDeLuz)


