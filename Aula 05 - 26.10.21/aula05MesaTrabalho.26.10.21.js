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

//3.b
function URL(x){
   return "http://www./%22+x+%22.com.br"
}

//3.c
function exclamacao(x){
    return x+"!"
}

//3.d 
function humantodog(x) {
    return x * 7
}

//3.e
function salario(x){
    return x / 160
}

//3.f
function IMC(peso, altura) {
    return peso / ((altura * altura)/100)
}
console.log(80, 170)

function IMC(x, y) {
    return x/((y/100)*(y/100))
}
console.log(IMC(80, 170))

//acho que não rolou aqui não

//3.g