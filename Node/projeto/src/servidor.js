const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require ('./bancoDeDados')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post ('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSOn
})


app.listen(porta, () => {
    console.log(`Servidor esta executando na porta ${porta}.`)
})








// const bodyParser = require('body-parser')
// const bancoDedados = require('./bancoDedados')



// app.get('./produtos/:id', (req, res, next) => {
    //     res.send(bancoDedados.getProduto(req.params.id))
    // })
    
    // app.post('/produtos', (req, res, next) => {
    //     const produto = bancoDedados.salvarProduto({
    //         nome: req.body.nome,
    //         preco: req.body.preco
    //     })
    //     res.send(produto) //JSON
    // })