// string é um objeto e possui seus próprios metódos.


let nome = " Rodrigo Escobar ";

//LENGTH = retorna a QUANTITADE de caracteres ** nesse caso Rodrigo têm 7 letras
console.log(nome.length);

//TRIM = RETIRA os ESPAÇOS VAZIOS do INíCIO ou FIM da string (não retira os espaços entre as palavras) 
// console.log(nome); 
// console.log(nome.trim());

let nome2 = nome.trim(); //função para gravar a informação/dado
console.log(nome2.length); // executando a função para mostrar que ela contabilizou menos (pois tiramos os espaços)

//SPLIT
// let nome2 = nome.trim();
console.log(nome.split(" ")); // quebra a string >> transforma/RETORNAR em ARRAY

//ARRAY
let nomes = ["Marcos", "Rodrigo","Glauber", "Rafael"] // sempre entre COLCHETES 
console.log (nomes);
// let nomes = ["Pipoca", "Feijão","Carne", "Macarrão"] - possibilidade de usar no checkpoint

let dadosPessoa = ["Marcos", 25, true]; //aceita qualquer tipo (números,string, true) // começa sempre na posição 0 (zero)
console.log (dadosPessoa);

//ARRAY - FUNÇÕES/METÓDOS >> .push (PUSH)
console.log (nomes.push ("João", "Tutor")); // "empurrando/acrescentando novos valores ao ARRAY NO FINAL"

//ARRAY - FUNÇÕES/METÓDOS >> .pop  // Retira o ÚLTIMO "valor" de dentro do ARRAY
let ultimoValor = nomes.pop();
console.log(nomes);
console.log(ultimoValor);

//ARRAY - FUNÇÕES/METÓDOS SHIFT>> .shift  // Retira o PRIMEIRO "valor" de dentro do ARRAY
let primeiroValor = nomes.shift();
console.log(nomes);
console.log(primeiroValor);

//ARRAY - FUNÇÕES/METÓDOS UNSHIFT>> .unshift  // INCLUI na posição 0 (zero) PRIMEIRA POSIÇÃO "valor" dentro do ARRAY
nomes.unshift(ultimoValor);
console.log(nomes);

//ARRAY - FUNÇÕES/METÓDOS JOIN>> .join  // Transforma um ARRAY em STRING ou ao reverso **usando um split**
let strNomes = nomes.join(); // por padrão separa por virgula **caso não indicado nenhum parâmetro
console.log(strNomes);

//ARRAY - FUNÇÕES/METÓDOS LASTINDEXOF >> .lastIndexOf  // Procura pelo elemento FINAL DO ARRAY
let y = nomes.lastIndexOf("João");
console.log(y);

// let y = nomes.indexOf("João");
// console.log(y);


//ARRAY - FUNÇÕES/METÓDOS INCLUDES >> .includes  // Retorna um BOOLEANO (true / false)
let x = nomes.includes ("João");
let xp = nomes.includes ("Marcelo");
console.log (x,xp);

//alterando a possição
nomes [2] = "Marcelo Galvão";
console.log (nomes);





