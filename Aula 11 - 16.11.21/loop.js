// DicasPG - CICLO FOR

for (let i=0; i<=4; i++) {
    console.log (i)
}

console.log ("=====================")
for (let retorna=1; retorna <=5; retorna++) {
    console.log ("Volta Número: " + retorna);
};

console.log ("=====================")
for (let i=5; i>0; i--) {
    console.log ("Olá mundo " + i);
}

console.log ("=====================")
// DicasPG - CICLO WHILE

let volta = 1;
while (volta <= 5) {
    console.log ("Retorna: " + volta);
    volta ++ // NÃO esquecer do contador = loop infinito
}
console.log ("=====================")
// DicasPG - CICLO DO WHILE 
let voltaDowhile = 0
do {
    console.log("Retorna número: " + voltaDowhile); voltaDowhile ++
} while(voltaDowhile <= 5);


//Dica professor

for (let i=0; i <=10; i++) {
    if (i % 2 == 0)
    console.log ("Contador ==", i);
}
console.log ("=====================")
for (let i=0; i <=10; i= i+2) {
     console.log ("Contador ==", i);
}

console.log ("=====================")

let nome = ["Rodrigo", "João", "Marcos"];
    // console.log (nome [1]);
for (let i=0; i <nome .length; i++) {
    console.log(nome [i]);
}

