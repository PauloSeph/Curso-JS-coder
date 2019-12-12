
// Entao tudo que está associado ao bloco if será executado se for True

function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

// True entao apareceu no console.
soBoaNoticia(8.1) 
// False nao apareceu
soBoaNoticia(6.1) 


// Aqui vamos testar os valores que se definem para false e true.

function seForVerdadeEufalo(valor) {
    if(valor){
        console.log('É Verdade... ' + valor)
    }
}

seForVerdadeEufalo() //False --> undefined ja que nao foi pasado nada.
seForVerdadeEufalo(null)  // False
seForVerdadeEufalo(undefined) // False - mesmo jeito do primeiro, so que explicito que é undefined
seForVerdadeEufalo(NaN) // False --> not a number
seForVerdadeEufalo('') // False - String vazio
seForVerdadeEufalo(0) // False -- 0 é false
seForVerdadeEufalo(-1) // True
seForVerdadeEufalo(' ') // True -- string com espaço é True
seForVerdadeEufalo('?') // True
seForVerdadeEufalo([]) // True -- Array vazio
seForVerdadeEufalo([1, 2]) // True -- Array com elementos
seForVerdadeEufalo({}) // True -- Object vazio