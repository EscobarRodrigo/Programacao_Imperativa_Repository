

let Dadosclientes = require("./modulo2");
let listaUsuarios = [];

function NovaConta (numero, tipo, saldo, titular) {
  this.numero = numero,
  this.tipo = tipo,
  this.saldo = saldo,
  this.titular = titular
}

for (let i = 0; i < Dadosclientes.length; i++) {
  listaUsuarios.push(new NovaConta(Dadosclientes[i].numero, Dadosclientes[i].tipo, Dadosclientes[i].saldo, Dadosclientes[i].titular));
}
// console.log (listaUsuarios);

let banco = {
  clientes: listaUsuarios,
  consultarCliente: function(titular) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titular === titular) {
        return this.clientes[i];
      }
    }
  }
}

console.log (banco.consultarCliente('Bendite Huggett'));

