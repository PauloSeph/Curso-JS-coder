// IIFE --> immediately invoked function expression


// invoca imediatamente a function.. Ela foge do escopo global. 
// tudo que criar so vai estar disponivel dentro dessa funcao, let, var, const etc.
(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()