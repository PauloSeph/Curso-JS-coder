// Lembrando que o var da para declarar 2vezes sem gerar problemas.

// Lembrando que os dois estão no mesmo escopo global, mesmo estando dentro de blocos como abaixo
// ambos iram para o escopo, já que é ignorado se não for dento de um bloco com function.
// Aqui ambas variaveis estão no escopo global.
var numero = 1
{
    var numero = 2 // aqui sobrescreveu o 1
    console.log('dentro =', numero)
}
console.log('fora =', numero)
//Teremos o nome impresso duas vezes 