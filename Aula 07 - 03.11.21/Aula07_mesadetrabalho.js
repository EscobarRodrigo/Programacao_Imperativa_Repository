//Exercício 01

console.log (!true); // false - 01
console.log (!false); // true - 02
console.log (!!false); // false - 03
console.log (!!true); // true - 04
console.log (!1); // false - 05
console.log (!!1); // true - 06
console.log (!0); // true - 07
console.log (!!0); // false - 08
console.log (!!""); // false - 09

 
 let X = 5;
 let Y = 9;

//A)
console.log ((X < 10) && (X!==5)); //false

//B)
console.log ((X > 9) || (Y ===5)); //false

//C)
console.log (!(X===Y));//true

// //Ex2

let x = 10;
let y = "a";
console.log ((y==="b") || (x >= 10)); // true

let a = 3; // x
let b = 8; // y
console.log (!(a=="3") || (a === b) && !(b!==8) && (a<=b)); //false

let str = ""          // string vazia = FALSE
let msg =  "haha!"    // string com parâmetro/informação = TRUE 
let eBonito = "false" // string com parâmetro/informação = TRUE

console.log ( !((str|| msg) && eBonito)); //false