let listaFilmes1 = ["filme1","filme1","filme1"];
let listaFilmes2 = ["filme1","filme1","filme1"];

// function converterAMaiusculas(array){

//   array[0] = array[0].toUpperCase()
//   array[1] = array[1].toUpperCase()
//   array[2] = array[2].toUpperCase()
  
//   return array
// }
// console.log (converterMaisculas (listaFilmes1));

function converterAMaiusculas(array){
    for (let i=0; i<array.length; i++)
    
  
    
  return array
}

console.log (converterMaisculas (listaFilmes1));

// Quokka.js

// function passagemDeElementos (array1, array2) { 
// array1.push(array2.pop().toUpperCase()) 
// array1.push(array2.pop().toUpperCase()) 
// array1.push(array2.pop().toUpperCase()) 
// array1.push(array2.pop().toUpperCase()) 
// array1.push(array2.pop().toUpperCase()) 
// return array1
// }
// passagemDeElementos (listaFilmes2,listaFilmes1);

function passagemDeElementos (array1, array2) { 
    let qtd = array2.length;
    for (let i=0; i< qtd; i++);


    array1.push(array2.pop().toUpperCase()) 
    
    return array1
    }
    passagemDeElementos (listaFilmes2,listaFilmes1);

//3

let filmes = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];
let filmes2 = ["toy story", "finding nemo", "kung-fu panda", "wally", "fortnite"];




const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

function compararClasificacoes(asia, europa) {
  let comparacionesAsiaEuropa = [];
  comparacionesAsiaEuropa[0] = asia[0] === europa[0]
  comparacionesAsiaEuropa[1] = asia[1] === europa[1]
  comparacionesAsiaEuropa[2] = asia[2] === europa[2]
  comparacionesAsiaEuropa[3] = asia[3] === europa[3]

return comparacionesAsiaEuropa;
}

console.log(compararClasificacoes(asiaScores,euroScores));
