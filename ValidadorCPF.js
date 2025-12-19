class ValidadorCPF {
    static validar(tamanho) {
        if(tamanho == 11) {
            return console.log('True');
        } 

        return console.log('False');
    }
}

ValidadorCPF.validar("03132131", 1)