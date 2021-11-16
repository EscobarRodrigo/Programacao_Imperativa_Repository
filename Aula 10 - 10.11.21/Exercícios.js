let feiraSemanal = ["Couve","Cenoura","Abobrinha","Vagem Holandesa","Batata Doce","Tomate", "Cenoura","Maçã","Banana","Melancia"];
console.log ("Criando ARRAY");
console.log ("-------------------------------");
console.log (feiraSemanal);
console.log ("-------------------------------");

let separarJoin = feiraSemanal .join("-");
console.log ("Aplicando Metódo_JOIN");
console.log ("Metódo .join() transforma um ARRAY em STRING. Ou realiza a função reversa, caso utilizada em combinação com o Metódo SPLILT");
console.log ("-------------------------------");
console.log (separarJoin);

let retiraPop = feiraSemanal .pop ();
console.log ("Aplicando Metódo_POP");
console.log ("Metódo .pop() RETIRA o ÚLTIMO valor de dentro do ARRAY");
console.log ("-------------------------------");
console.log (retiraPop);
console.log ("-------------------------------");

let retiraPrimeiroShift = feiraSemanal .shift ();
console.log ("Aplicando Metódo_SHIFT");
console.log ("Metódo .shift() RETIRA o PRIMEIRO valor de dentro do ARRAY");
console.log ("-------------------------------");
console.log (retiraPrimeiroShift);
console.log ("-------------------------------");


let incluiPrimeiroUnshift = feiraSemanal .unshift ("Agrião");
console.log ("Aplicando Metódo_UNSHIFT");
console.log ("Metódo .unshift() INCLUI na posição 0 (zero = PRIMEIRA POSIÇÃO) um *valor* dentro do ARRAY");
console.log ("-------------------------------");
console.log (incluiPrimeiroUnshift);
console.log ("-------------------------------");
console.log (feiraSemanal);
