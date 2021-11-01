//1 = 30

//2
function a(x,y){
    return x * 2
    console.log(x)
    return x / 2
}

console.log(a(10));
//Resultado = 20

//3.a
function polegada_cm(x){
   return x * 2.54
}
console.log(polegada_cm(70));

//3.b
function URL(x){
   return "http://www./%22+x+%22.com.br"
}
console.log(URL());

//3.c
function exclamacao(x){
    return x+"!"
}
console.log(exclamacao(10));

//3.d 
function humantodog(x) {
    return x * 7
}
console.log(humantodog(1));

//3.e
function salario(x){
    return x / 160
}
console.log(salario(10000));

//3.f
function IMC(peso, altura) {
    return peso / ((altura * altura)/10000)
}
console.log(IMC (102,177))

// //imc
// function IMC(x, y) {
//     return x/((y/100)*(y/100))
// }
// console.log(IMC(80, 170))

//EXTRA
// Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. Investigue o que o método de .toUpperCase() faz.



// Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro. Dica: Isso te ajudará a entender o que o operador typeof faz.



// Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência. Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.

