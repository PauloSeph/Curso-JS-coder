// Entao se o this estiver entre o inicio e o fim, tem que estar entre ambos o inicio e fim para dar True.
// Se nao tiver entre esses valores retorna False--> Que seria o Else, caso contrario.

//Criamos aqui uma funcao com a condicao para que de true ou false.
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim   
    
}





// criamos uma const e passamos uma funcao criada a cima para ela.
const imprimirResultado = function (nota)
 {     // puxou a condicao para dentro dessa function, e passando os parametros para aparecer no console.
        // o nota represeta o ImprimirResultado. 

    if (nota.entre(9, 10)) { console.log('Quadro de Honra')  } // se a nota estiver entre 9 10 vai aparecer no console..
    else if(nota.entre(7, 8.99)) { console.log('Aprovado')  }
    else if(nota.entre(4, 6.99)) { console.log('Recuperacao')  }
    else if(nota.entre(0, 3.99)) { console.log('Reprovado')  }
    else { console.log('Nota invalida')}
        
}


// This --> ImprimirResultado
// Inicio -- primeiro valor passado no if
// Fim -- 2 valor passado no if

// Representando o Primeiro IF:
// seria o mesmo que assim: this(10) >= 9 e 10 <= 10 --> as duas condicoes dando certo = True. (aparece no console e ignora o resto)
imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)

