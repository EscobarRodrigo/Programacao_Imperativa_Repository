
// Nível I

//Soma
function soma(x,y) { // Criando função
    console.log("-------------- Teste de Operações / Calculadora SOMA --------------")
    return x + y      // Retorna cálculo da função
     }
 
//  Subtração
function subtracao(x,y) { // Criando função
    console.log("-------------- Teste de Operações / Calculadora SUBTRAÇÃO --------------")
    return x - y      // Retorna cálculo da função
     }

// Multiplicação
function multiplicacao(x,y) { // Criando função
    console.log("-------------- Teste de Operações / Calculadora MULTIPLICAÇÃO --------------")
    return x * y      // Retorna cálculo da função
     }

   

// Divisão
function divisao(x,y) { // Criando função
    console.log("-------------- Teste de Operações / Calculadora DIVISÃO --------------")
    return x / y      // Retorna cálculo da função
     }


//  Nível II

console.log ("Teste de Operações / Calculadora ")//  

console.log('-------------- Teste de Operações / Calculadora --------------')


console.log (soma (10,5));

console.log (subtracao (10,5));
console.log (multiplicacao (10,5));
console.log (divisao (10,5));
console.log (divisao (10,0));

     //Nível III - Funções Extras


   function quadradoDoNumero(x){
    return multiplicacao (x,x);
 } 
 console.log (quadradoDoNumero (10))


function mediaDeTresNumeros (x,y,z) {
    return divisao(soma(soma(x,y),z),3)
}
console.log(mediaDeTresNumeros(2,2,2));


function calculaPorcentagem (x,y) {
    return multiplicacao(x,divisao(y,100))
}

console.log(calculaPorcentagem(350,40));

function geradorDePorcentagem (x,y) {
    return multiplicacao(divisao(x,y),100) 
}

console.log(geradorDePorcentagem(20,450));