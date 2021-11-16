// let str = "una string qualquer"

// let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str]];
// console.log(grupoDeAmigos[2][grupoDeAmigos[2].length (- 1)]);

// function imprimirInverso

// let arrayOriginal = ['one', 'two', 'three'];
// arrayOriginal.reverse();

// console.log(arrayOriginal) 

let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];

function converterMaiuscula (array) {
    for (let i=0; i< array.length; i++) {
        array [i]= array[i].toUpperCase();
    }
    return array
}
console.log (converterMaiuscula(peliculas));

console.log ("---------------");

let peliculas2 = ["Rei Leão", "Toy Story"];

function passagemDeElementos (array1,array2) {

    array1.push (array2.pop() .toUpperCase())
    return array1
}

