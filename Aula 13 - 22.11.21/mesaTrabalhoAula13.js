let contaBasica = {
    numero: 105060,
    tipoDeConta:"Conta Corrente",
    saldo: 225.00,
    titular: "Joel Vasconcelos"
}


"Função Construtora"
function ContaUsuario (numero, tipo, saldo, titular) {
    this.numero = numero,
    this.tipo = tipo,
    this.saldo = saldo,
    this.titular = titular
}

console.log ();
console.log ("Lista de Clientes");
console.log ();
let contasGerais = [];

contasGerais.push(new ContaUsuario(5486273622,"Conta Corrente", 27771, "Abigael Natte"));
contasGerais.push(new ContaUsuario(1183971869,"Conta Poupança", 8675, "Ramon Connell"));
contasGerais.push(new ContaUsuario(9582019689,"Conta Poupança", 27363, "Jarret Lafuente"));
contasGerais.push(new ContaUsuario(1761924656,"Conta Poupança", 32415, "Ansel Ardley"));
contasGerais.push(new ContaUsuario(7401971607,"Conta Poupança", 18789, "Jacki Shurmer"));
contasGerais.push(new ContaUsuario(630841470,"Conta Corrente", 28776, "Jobi Mawtus"));
contasGerais.push(new ContaUsuario(4223508636,"Conta Corrente", 2177, "Thomasin Latour"));
contasGerais.push(new ContaUsuario(185979521,"Conta Poupança", 25994, "Lonnie Verheijden"));
contasGerais.push(new ContaUsuario(3151956165,"Conta Corrente", 7601, "Alonso Wannan"));
contasGerais.push(new ContaUsuario(2138105881,"Conta Poupança", 33196, "Bendite Huggett"));

// console.log (contasGerais);
// console.log ();

"Objeto Literal"
let banco = {
    cliente : contasGerais,
    consultarCliente : function(nome) {
        for (let i = 0; i < this.cliente.length; i++) {
            if (this.cliente[i].titular == nome) {
                return this.cliente[i];
            }
        }
        return "Cliente não encontrado";
    },

    deposito : function(nome, valor) {
        for (let i = 0; i < this.cliente.length; i++) {
            if (this.cliente[i].titular == nome) {
                this.cliente[i].saldo += valor;
                return console.log("Depósito realizado, seu novo saldo é: ", this.cliente[i].saldo);
            }
        }
        return console.log("Cliente não encontrado");
    },
    saque : function(nome, valor) {
        for (let i = 0; i < this.cliente.length; i++) {
            if (this.cliente[i].titular == nome) {
                if ((this.cliente[i].saldo - valor) < 0) {
                    return console.log("Fundos Insuficientes");
                } else {
                    this.cliente[i].saldo -= valor;
                    return console.log("Saque realizado com sucesso, seu novo saldo é: ", this.cliente[i].saldo);
                }
            }
        }
        return console.log("Cliente não encontrado");
    }
}

console.log(banco.consultarCliente("Maria"));

banco.deposito("Bendite Huggett", 53);

banco.saque("Bendite Huggett", 600);
banco.saque("Bendite Huggett", 1500);

console.log (banco.consultarCliente("Bendite Huggett"));