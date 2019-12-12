// Tratamento de erro 


function tratarErroElancar(erro) {
    throw new Error('AAA')
    // throw 10
    // throw true
    // throw 'mensagem'
    // throw {
    //     nome: erro.name,
    //     msg: erro.mensagem,
    //     date: new Date
 
}


function imprimirNomeGritado(obj) {
    try{ console.log(obj.name.toUpperCase() + '!!!') }
    catch (e) { tratarErroElancar(e) }
    finally { console.log('final') }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)