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
