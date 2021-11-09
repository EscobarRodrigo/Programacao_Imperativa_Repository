let idade = 17;

if (idade > 18){
console.log("entrou no if");
    }
else if (idade == 18) {
    console.log("entrou no else if")
}
else if (idade == 19) {
    console.log("entrou no else if")
}
else{
console.log("entrou no else");
}




let podeSubir = 1.40

function podeSubir(altura, vemAcompanhada) {

    if (altura > 1.40 && altura < 2) {
        return true;
    } else if (altura < 1.40) {
        return false;
    } else {
        return false;
    }
}
console.log(podeSubir);