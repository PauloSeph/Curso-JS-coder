 class Avo {
     constructor(sobrenome) {
         this.sobrenome = sobrenome

     }
 }

 // Aqui estamos definindo uma relacao de prototype, entre pai e Avo
 class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        // Chamando o super(e passando sobrenome) para instancear a funcao construtora da super class, no caso o Avo.
        // Ou seja, ta chamando o constructor do Avo, passando sobrenome que também recebi, para que ele aponte(sete) this.sobrenome = sobrenome.
        
        super(sobrenome) 
        this.profissao = profissao
    }
 }

// Aqui estamos definindo uma relacao de prototype, entre Filho e Pai
 class Filho extends Pai {
     constructor() {
         super('Silva')
     }
 }

 const filho = new Filho
 console.log(filho)