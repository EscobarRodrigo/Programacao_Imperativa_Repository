"1.	Loop de Pares"
"Você deve criar uma função chamada loopDePares que receba um número como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.Caso o número da iteração somado com o número passado pelo parâmetro seja par, aparecerá no console: O número x é par"

function loopDePares (x) {

    for (let i = 0; i <= 100; i++) {
        if ((x+i) %2 ==0 ){
            console.log ("o numero " + (x + i) + " é par")
        }
        else {
            console.log(i);
        }
    }
};
// loopDePares(1);




"2.Loop ímpares com palavra"
"Você deve criar uma função chamada loopDeImpares que receba um número e uma palavra como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console. Agora, modifique o código para que, caso esse número somado com o número passado por parâmetro seja ímpar, mostre a palavra passada por parâmetro no console."




function loopDeImpares (num,impar) {
    for (let i = 1; i <= 100; i++){

        if ((num + i) %2 !== 0) {
            console.log(impar);
        }
        else {
            console.log(i);
        }
   }
}
// loopDeImpares(2,"impar, sera?");

"3.	Soma"
"Você deve criar uma função chamada soma que receba um número como parâmetro e retorne a soma de todos os seus números anteriores, incluindo o número recebido por parâmetro."
"Exemplo: soma(3) deve retornar 6 pois faz (1 +2 +3) // soma(8) deve retornar 36"


let criaArray = (a) => {
    let array = [];
    let qtd = a;

    for (let i = 0; i <= qtd; i++) {
        array.unshift(i);
    };

    let soma = array.reduce(
    function(acumulador, numero){
    return acumulador + numero;
    });

    return soma;
};

// console.log(criaArray(3));

"4.	Novo Array"
"Você deve criar uma função chamada newArray que receba um número como parâmetro e retorne um novo array com a quantidade de elementos equivalente ao valor do número que você passou por parâmetro."
"Exemplo:"
"newArray(5) deve retornar [1,2,3,4,5]"
"newArray(10) deve retornar [1,2,3,4,5,6,7,8,9,10]"

let newArray = (a) => {
    let array = [];
    let qtd = a;

    for (let i = 0; i <= qtd; i++) {
        array.push(i);
    };
    console.log(array);
};

console.log(newArray(5));


