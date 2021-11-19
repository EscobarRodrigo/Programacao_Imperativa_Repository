

console.log (31 > 30); // true

//NEGAÇÃO
console.log (!(30 >= 30) || true);
console.log (!("" || true)); // comparação vazia quando não possui nada/vazia ""  - // false
console.log (!(" " || true)); // Porém com espaço dentro " "= true, pois existe um carecter **ESPAÇO**) // false


// OU
console.log ((true) || true || true); // true
console.log ((false) || true || true); //
console.log ((false) || false || false);


// &&

console.log ((true) && true && true);
console.log ((false) && false && false);

var produtoAtivo = false

if(!produtoAtivo){
    console.log('Esse produto não está ativo')
}

