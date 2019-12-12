// Cuidado para usar o IF sem bloco, pois ele so pegar a primeira sentença de codigo a baixo dele, e ignora o resto.
// Como a sentença de codigo (final) está fora do if, ele sera sempre executado, mesmo se der True or false

function teste1(num) {
    if(num > 7) 
        console.log(num)

    console.log('Final') 
}

teste1(6)
teste1(8)


// Tomar cuidado para usar ;

// se colocar ; ponto e virgula(é uma sentença de codigo vazio), tudo que está depois não faz mais parte do bloco do if.
// ou sejá, nao use ponto e virgula nas estruturas if.
function teste2(num) {
    if(num > 7); // Nao usar ' ; ' !
    {
        console.log(num)
    }
}
 
teste2(6)
teste2(8)