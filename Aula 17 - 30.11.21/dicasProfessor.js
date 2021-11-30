"METODO ARRAY AVANÇADO"

"MAP .map()"
"Meio que um substitudo do FOR"

"Observação: SEMPRE utilizar junto com o RETURN; uma vez que ele está buscando/gerando/MAPEANDO o ARRAY ORIGINAL. Com isso, ele gera um ARRAY NOVO"

let numeros = [2, 4, 6];
let dobro = numeros.map(function(num){
    return num * 2;
});

console.log(dobro); // [4,8,12]


"FILTER .filter()"

array.filter(function(elemento){
    // definimos a condição que queremos aplicar
    // como filtro para a criação do novo array
    });

let idades = [22, 8, 17, 14, 30];
let maiores = idades.filter(function(idade){
    return idade > 18;
    });
    console.log(maiores);
    "Resposta [22, 30]"

    "Pra testar/retornar números pares idades%2===0"

//     let idades = [22, 8, 17, 14, 30];
// let maiores = idades.filter(function(idades){
//     return idades%2===0;
//     });
//     console.log(maiores);

    let letras = ['c', 'a', 's', 'a'];

let soma = letras.reduce(function (acumulador, letras) {
  return acumulador + letras;
});

console.log(soma);

"REDUCE .reduce()"
"Este método percorre a array e retorna um único valor."

array.reduce(function(acumulador, elemento){
// definimos o comportamento que queremos
// implementar sobre o acumulador e o elemento
});

let numeros = [5, 7, 16];
let soma = numeros.reduce(
function(acumulador, numero){
return acumulador + numero;
}
);
console.log(soma); // 28

"forEach()"

"É o FOR simplificado"
"Serve apenas para percorrer o ARRAY"

"O objetivo deste método é iterar em um array.Ele recebe uma callback como parâmetro e, ao contrário dos métodos anteriores, não retorna nada."

var paises = ['Brasil', 'Cuba', 'Peru'];
paises.forEach(
function(pais){
console.log(pais);
});