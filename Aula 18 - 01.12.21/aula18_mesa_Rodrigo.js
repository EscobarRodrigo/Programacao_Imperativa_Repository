"1.	Loop de Pares"
"Você deve criar uma função chamada loopDePares que receba um número como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.Caso o número da iteração somado com o número passado pelo parâmetro seja par, aparecerá no console: O número x é par"

function loopDePares (x) {

    for (let i = 0; i <= 100; i++) {
        if ((x+i) %2 ==0 ) {
            console.log ("o numero " + i + " é par")
    
        }
    }
};
// loopDePares(2);

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
};
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

function newArray (num)
{
let array = []
for (let i = 0; i <=num; i++) {
array.push(i);
}
console.log(array);
}

// newArray(5)

"5.	String.split()"
"Você deve criar uma função chamada split que receba uma string e simule o comportamento da função split original. Se você não sabe como funciona, o Google pode ajudá-lo."
"Importante: Você não pode usar o String.split()"
"Exemplo:"
"split(“olá”) deve retornar [”o”,”l”,”á”]"
"split(“tchau”) deve retornar [“t”,“c”,”h”,”a”,”u”]"


function split (str) {
    let array = []
    for (let i = 0; i < str.length; i++) {
    array.push(str[i]);
    
    }
    console.log(array);
    
    }
    // split("ola");

"6.	Mover os zeros para o final"
"Você deve criar uma função chamada moverZeros que receba um array como parâmetro e retorne outro com os números 0 ordenados ao final."

"Exemplo: "
"moverZeros([false,1,0,1,2,0,1,3,a]) deve retornar [false,1,1,2,1,3,a,0,0]"
"moverZeros([1,2,0,1,0,1,0,3,0,1]) deve retornar [1,2,1,1,3,1,0,0,0,0]"

function moverZeros (array) {
let mover = array.filter(function(elemento){
    return elemento != 0; 
    });
    
    array.forEach(function(novo){
    if (novo == 0){
    mover.push (novo)    
    }
});
console.log (mover)
}

// moverZeros([1,2,0,1,0,1,0,3,0,1]);

"7.	Lidando com dois arrays"
"Você deve criar uma função chamada arrayHandler que receba dois arrays de igual tamanho como parâmetros e exiba no console: Eu sou {elemento do array 1} e eu sou {elemento do array 2}"
"Exemplo:"
"arrayHandler([1,2,3], [“o”,”l”,”á”]) deve mostrar:"
"Eu sou 1 e eu sou o"
"Eu sou 2 e eu sou l"
"Eu sou 3 e eu sou á"

function arrayHandler (array1,array2) {
    
    for (let i = 0; i < array1.length; i++) {
    console.log ("Eu sou " + array1[i] + " e eu sou " + array2[i])
}
}
// arrayHandler ([1,2,3],["o","l","á"])

"8.	Arrays de objetos"
"Você deve criar uma função chamada arrayObjects que receba um número como parâmetro e retorne um array de objetos que tem uma propriedade chamada valor que contém o valor do número e seus anteriores."
"Exemplo:"
"arrayObjects(5) deve retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]"
"arrayObjects(3) deve retornar [{valor: 1}, {valor: 2}, {valor: 3}]"

function arrayObjects (num) {
    let arraynovo = []
    
    for (let i = 1; i <= num; i++) {
        arraynovo.push ({valor: i})
        
        }
        console.log (arraynovo)
    }
    
    // arrayObjects (5);


"9.	Arrays de objetos 2"
"Você deve criar uma função chamada arrayObjectsTwo que recebe um número e uma palavra como parâmetro e retorna um array de objetos que possui: uma propriedade nomeada pela palavra passada por parâmetro e o valor dessa propriedade deve ser o número passado por parâmetro e seus anteriores."

"Exemplo:"
"arrayObjectsTwo(5, “olá”) deve retornar [{olá: 1}, {olá: 2}, {olá: 3}, {olá: 4}, {olá: 5 }]"
"arrayObjectsTwo(3, “tchau”) deve retornar [{tchau: 1}, {tchau: 2}, {tchau: 3}]"

function arrayObjectsTwo (n1,pal) {


    let array = []
    for (let i = 1; i <= n1; i++) {
        array.push({[pal]:i})
        
    }
    console.log(array)
    }
    
    arrayObjectsTwo(5, "olá");
    arrayObjectsTwo(3, "tchau")