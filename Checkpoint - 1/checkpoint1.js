/* Pratos
Pipoca: 1
Macarrão: 2
Carne: 3
Feijão: 4
Brigadeiro: 5 */


function usarMicroondas(prato, tempo) {
    switch (prato){
        case 1:
            if (tempo >19 && tempo < 30){
                console.log ("Pipoca Queimou");
            } else if (tempo <10){
                console.log ("Tempo Insuficiente")
            } else if (tempo >= 30) {
                console.log ("Kabumm!");
            } else {
                console.log("Prato pronto, bom apetite!")
            }
        break;
        case 2:
            if (tempo > 15 && tempo < 24){
                console.log ("Macarrão Queimou");
            } else if (tempo <8){
                console.log ("Tempo Insuficiente")
            } else if (tempo >= 24) {
                console.log ("Kabumm!!");
            } else {
                console.log("Prato pronto, bom apetite!")
            }
        break;
        case 3:
            if (tempo >29 && tempo < 45){
                console.log ("Carne Queimou");
            } else if (tempo <15){
                console.log ("Tempo Insuficiente para Carne")
            } else if (tempo >= 45) {
                console.log ("Kabumm!!");
            } else {
                console.log("Prato pronta, bom apetite!")
            }
        break;
        case 4:
            if (tempo >23 && tempo < 36){
                console.log ("Feijão Queimou");
            } else if (tempo <12){
                console.log ("Tempo Insuficiente")
            } else if (tempo >= 36) {
                console.log ("Kabumm!!");
            } else {
                console.log("Prato pronto, bom apetite!")
            }
        break;
        case 5:
            if (tempo > 15 && tempo < 24){
                console.log ("Brigadeiro Queimou");
            } else if (tempo <8){
                console.log ("Tempo Insuficiente")
            } else if (tempo >= 24) {
                console.log ("Kabumm!!");
            } else {
                console.log("Prato pronto, bom apetite!!!")
            }
        break;
        default: 
            console.log ("Prato Inexistente");
    }
}

/* Pratos
Pipoca: 1
Macarrão: 2
Carne: 3
Feijão: 4
Brigadeiro: 5 */

console.log ("")
console.log ("PIPOCA")
usarMicroondas(1, 20);
usarMicroondas(1, 30);
usarMicroondas(1, 9);
usarMicroondas(1, 10);

console.log ("")
console.log ("MACARRÃO")
usarMicroondas(2, 16);
usarMicroondas(2, 5);
usarMicroondas(2, 25);
usarMicroondas(2, 10);

console.log ("")
console.log ("CARNE")
usarMicroondas(3, 30);
usarMicroondas(3, 46);
usarMicroondas(3, 14);
usarMicroondas(3, 15);

console.log ("")
console.log ("FEIJÃO")
usarMicroondas(4, 24);
usarMicroondas(4, 36);
usarMicroondas(4, 11);
usarMicroondas(4, 12);

console.log ("")
console.log ("BRIGADEIRO")
usarMicroondas(5, 10);
usarMicroondas(5, 20);
usarMicroondas(5, 25);
usarMicroondas(5, 7);

console.log ("")
// console.log ("Prato Inexistente")
usarMicroondas(6);
