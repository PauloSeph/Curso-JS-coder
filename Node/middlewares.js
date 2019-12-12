// Middleware pattern (chain of responsability)

const passo1 = (ctx, next) => {
    ctx.valor = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo4 = (ctx, next) => {
    ctx.valor4 = 'mid4'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'


const exec = (ctsx, ...midlewares) => {
    const execPasso = indice => {
        midlewares && indice < midlewares.length &&
            midlewares[indice](ctsx, () => execPasso(indice + 1))

    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo4, passo3)
console.log(ctx)


console.log(ctx.length)




