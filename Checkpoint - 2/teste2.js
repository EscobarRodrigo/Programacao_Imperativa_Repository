for (var i = 0; i <50; i+=10) {
    console.log(i);    
}
console.log(i);



// let frutasAmarelas=['Melão','Mamão','Limão'];
// let [fruta1,fruta2,fruta3]=frutasAmarelas;

// console.log(fruta1);
// console.log(fruta2);
// console.log(fruta3);
// console.log(frutasAmarelas);

let numeros= [10, 8, 7, 99, 0, 1, 6]

// numeros.sort(function(a,b){ return a-b;});[0,  1,  6, 7, 8, 10, 99]
// numeros.sort(function(a,b){ return a*b;});[10, 8, 7, 99, 0, 1, 6 ]
numeros.sort(function(a,b){ return b-a;}); [99, 10, 8, 7,6,  1, 0 ]
// numeros.sort(function(a,b){ return a,b;}); [10, 8, 7, 99,0, 1, 6 ]
// numeros.sort(function(a,b){ a-b;}); [10, 8, 7, 99,0, 1, 6 ]

// console.log(numeros)


function soma (a=1, b=3)
{return a+b;}

// console.log (soma());
// console.log (soma(3));
// console.log (soma(1,2));

function soletrar (texto){
    console.log(texto.replace('-','').toLocaleUpperCase().split("").join("-"));
}

// soletrar("digital-house");
// soletrar("ctd");

let valor=5
let fatorial=1;


// for (let i=valor; i > 1; i--){
//     fatorial*=i;}
// console.log("Fatorial = " + fatorial);


// for (let i=valor; i > 1; i--){
//     fatorial=i;}
// console.log("Fatorial = " + fatorial);


// for (let i=0; i <=5; i++){
//     fatorial*=i;}
// console.log("Fatorial = " + fatorial);

// for (let i=valor; i <=5; i++){
//     fatorial*=i;}
// console.log("Fatorial = " + fatorial);


// var z=0;
// for (var i=20; i<50; i+=10){
//     z+=i;}console.log(z);