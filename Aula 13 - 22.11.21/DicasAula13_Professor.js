let carro = {
    marca: "ford",
    modelo: "k",
    andar: function (){
        return "carro" +this.modelo+ " andando";

    }

}; "Objeto Literal"
console.log(carro.andar());


"Função Construtora"

function Carro (marca,modelo){
    this.marca = marca;
    this.modelo= modelo;
}

let carro1 = [];
carro1.push( new Carro ("Tesla", "x"));
carro1.push( new Carro ("Tesla", "1"));
carro1.push( new Carro ("Tesla", "2")); "se usar o FOR (laço), não preciso ficar preenchedo várias vezes os dados"

let carroNovo = new Carro("Tesla", "x");
let carroNovo1 = new Carro("Tesla", "3");
// console.log (carroNovo)
console.log(carro1);

"JSON" // ESTRUTURA //
let dadosCarro = {
    "cor":"vermelho",
    "marca":"ford",
    "placa": "XDC-785",
    "qtdPortas" :4
}
console.log(dadosCarro);