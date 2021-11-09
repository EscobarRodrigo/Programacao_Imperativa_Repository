
// let dia = "sexta";

// if (dia == "domingo"){
//     console.log ("Vou para a praia!")
// }

// else if (dia == "sexta"){
//     console.log("Vou para o cinema!");
// }

// else {
//     console.log("Fico em casa!");
// }

// IF TERNÁRIO 

let dia = "sexta";

let resultado = dia == "domingo"? "Vou na praia" : "Fico em casa";
console.log(resultado);

// SWITCH

switch (dia) {

    case "segunda": 
        console.log("Vou tomar café");
        break;
    case "quarta": 
        console.log("Vou no cinema");
        break;
    case "quinta": 
        console.log("Vou à praia!");
        break;
    default:
        console.log("Não vou fazer nada!");
}


 