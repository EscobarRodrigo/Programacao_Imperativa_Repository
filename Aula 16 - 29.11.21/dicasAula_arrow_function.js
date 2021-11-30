"Arrow Function"

let bemVindo = () => 'Olá Mundo!';
console.log(bemVindo());

let dobro = numero => numero * 2; "Arrow Function com 1 parâmetro"
console.log(dobro (2));


let somar = (a,b) => a+b; "Arrow Function com 2 parâmetros"
console.log(1+1);

let horaAtual = () => {
let data = new Date();
return data.getHours() + ':' +
data.getMinutes();
}
console.log(horaAtual());


// "Callback"
// ">> Não precisa chamar ela com o console.log"

// setTimeout (function() {
//     console.log('Olá Mundo!')
// },1000)

// setInterval(function () {
//     console.log("Olá Mago")
// }, 1000);

// let minhaCallback = () => console.log('Olá mundo!');
// setTimeout(minhaCallback, 2000);


function nomeCompleto(nome, sobrenome) {
    return nome  + ' ' + sobrenome;
     };
    console.log(nomeCompleto("Rodrigo", "Escobar"));

function bomDia(nome, sobrenome, callback) {
    return 'Olá, ' + callback(nome, sobrenome);
    };
    console.log(bomDia("Rodrigo", "Escobar",nomeCompleto));

function iniciais(nome, sobrenome) {
    return nome[0] +" "+ sobrenome[0];
    };

console.log(iniciais("Rodrigo", "Escobar",nomeCompleto));

"Micro Desafio PG - CALLBACK"
function acaoCarro (callback){
    return callback ();
}
console.log(acaoCarro (function(){
    return "Olá"
}));

function andar() {
    console.log('carro Andando');
}

function parado() {
    console.log('carro Parando');
}
acaoCarro(andar);
acaoCarro(parado);
// andar();
// parado()

