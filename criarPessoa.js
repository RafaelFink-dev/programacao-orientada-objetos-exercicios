function Pessoa1() {
    this.nome = "João";
    this.idade = 23;
    this.anoNascimento = 2002;
    this.profissao = "Dev";
    this.calculaIdade= function() {
        return new Date().getFullYear() - this.anoNascimento;
    };
}

const pessoa1 = new Pessoa1();

console.log(pessoa1.nome)

//-----------------------------------------------

function Pessoa(nome, idade, anoNascimento, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.anoNascimento = anoNascimento;
    this.profissao = profissao;
    this.calculaIdade= function() {
        return new Date().getFullYear() - this.anoNascimento;
    };
}

const pessoa2 = new Pessoa("Rafael", 23, 2022, "Dev Fullstack");
console.log(pessoa2.nome)

