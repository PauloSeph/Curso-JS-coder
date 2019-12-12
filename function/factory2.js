  function criarProduto (nome, preco) {
    
     return {
         nome,
         preco,
         desconto: 0.1
     }
     
 }
 
 // Criar os objetos, vamos passar: 
 console.log(criarProduto('Notabook', 2199.49))
 console.log(criarProduto('iPad', 1199.49))