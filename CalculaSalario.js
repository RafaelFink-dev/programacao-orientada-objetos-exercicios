const empregado = {
    salarioBase: 5000,
    valorHoraExtra: 100,
    qtHorasExtras: 10,
    calculaSalario: function() {
        return this.salarioBase + (this.valorHoraExtra * this.qtHorasExtras);
    }
}

console.log(empregado.calculaSalario());

const empregado2 = {
    salarioBase: 10000,
    valorHoraExtra: 80,
    qtHorasExtras: 6,
    calculaSalario: function() {
        return this.salarioBase + (this.valorHoraExtra * this.qtHorasExtras);
    }
}

console.log(empregado2.calculaSalario());