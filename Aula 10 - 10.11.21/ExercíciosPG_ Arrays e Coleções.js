// let str = "una string qualquer"

// let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str]];
// console.log(grupoDeAmigos[2][grupoDeAmigos[2].length -1]);
// //RESPOSTA: una string qualquer
// //MOTIVO: Estou indicando -1; ou seja, não irá trazer mais a informação. Sendo assim, sobra somente a variável "str".



let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])
//Retorna: "Spiderman"
//Motivo: [1] = posiçãodo  ARRAY que estou buscando //
//Motivo: [0] = posição DENTRO do ARRAY que estou buscando //

let filmes = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(filmes[2][0])
//Retorna: "Penélope Glamour"
//Motivo: [1] = ARRAY (posição dele dentro dos demais ARRAYS) que estou buscando //
//Motivo: [0] = posição DENTRO do ARRAY que estou buscando //


// function imprimirInverso

// let arrayOriginal = "[one, two, three]";
// arrayOriginal.reverse();

// console.log(arrayOriginal)