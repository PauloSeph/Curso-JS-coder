
function area(largura, altura) {
    const area = largura * altura
    // passando uma condicao, onde area tem que ser maior que 20 para aparecer no console.
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    // Ou seja se der falso os resultados de baixo vai aparecer aqui no return, tem que ser maior que 20 para ser true e aparecer a cima.
    } else {
        return area 
    }
}

console.log(area(2, 2)) // 4
console.log(area(2)) // NaN
console.log(area())  // NaN
console.log(area(2, 3, 17, 22, 44))  // 6, so pega os dois primeiros parametros e ignorar o resto, já que so tem largura e altura na function 
console.log(area(5, 5)) // aqui da 25, entao ele é True, vai entrar no IF, e nao vai retorna nada, dando Undefined.
