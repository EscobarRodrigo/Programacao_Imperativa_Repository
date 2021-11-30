"Micro desafios"

"MAP .map()"
//Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares."


let array = [2,4,6,8];

let array2 = array.map(function(num){
    return num + 1;
});
console.log(array2);

"FILTER .filter()"
//Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

let nomes = ['João','Maria','Rodrigo','Escobar','Carlos','Maria'];

let maria = nomes.filter(function(nome){
    return nome == 'Maria';
});
console.log(maria);

"REDUCE .reduce()"
//Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”

let numeros = [2,4,6,8,10];
let string = numeros.reduce(
function(acumulador, numero){
return acumulador + "-"+ numero;
}
);
console.log(string);


"forEach()"

//Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.

var animais = ['Raposa', 'Cachorro', 'Gato'];
animais.forEach(
function(animal){
console.log("O animal é: " +animal);
});



