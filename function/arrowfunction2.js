function Pessoa() {
    this.idade = 0


    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}



new Pessoa
// Grande vantagem de usar a function arrow => é que o this nao varia.

