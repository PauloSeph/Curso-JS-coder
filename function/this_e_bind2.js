function Pessoa () {
    this.idade = 0

    // forma de deixar o this como self(variavel)
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa