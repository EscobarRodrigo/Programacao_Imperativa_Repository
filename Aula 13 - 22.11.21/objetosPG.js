
//Objetos - Aula-Dicas PG

//ESTRUTURA: let pais = {};
// O que estiver dentro das {}, se chama propriedade
// não deve ser atribuido através/com o simbolo de "igual =" // usar dois pontos :

let pais = {
    nome: "Brasil",
    capital: "Brasilia",
};

console.log (pais);

console.log(pais.nome);
console.log(pais ["nome"]);// se eu sei o nome da propriedade, eu posso "chamar" ela usando entre os colchetes (arrays).


console.log(pais.capital);
console.log(pais ["capital"]);// se eu sei o nome da propriedade, eu posso "chamar" ela usando entre colchetes (arrays).


"MÉTODOS"

let pais2 = {
    nome: "Brasil",
    capital: "Brasilia",
    nacionalidade: function () {// função anônima
        return "Sou do Brasil" + " Usando função Anônima, com RETURN"; // ao invés de usar console.log ("Sou do Brasil"); - devo utilizar RETURN, para que o sistema não traga a mensagem de "undefined" - visto que não há nenhum parametro dentro da função.
    },
};

console.log(pais2.nacionalidade());

let pais3 = {
    nome: "Brasil",
    capital: "Brasilia",
    nacionalidade: function () {// função anônima = METÓDO dentro do objeto
        return "Sou do " + this.nome + " Usando THIS"; // ao invés de usar/repetir/escrever Brasil, utilizo a palavra TRHIS. Pois ela fará a referência a minha propriedade.
    },
};

console.log(pais3.nacionalidade());


// Função Construtora
// a função sempre começa com letra maiúscula (exemplo: function Carro)

// INSTANCIAR

//ESTRUTURA
function Rodrigo(){}

let carro = {
    marca: "Fiat",
    modelo: "Uno",
};

function Carro (valorMarca,ValorModelo){
    this.marca = valorMarca;  "Precisa do this, para vincular a propriedade da variável criada"
    this.modelo = ValorModelo;
}

console.log(carro); "Console.log padrão"

console.log(new Carro("Renault","Clio")); "Console NEW > criando o Objeto * Função Construtora"


let array = {
    valor: "Brasil"

}
