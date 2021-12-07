


// Minha Primeira Aplicação I
// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:

let pessoas = require('./aula19_mesa_dados');
console.log(pessoas);

let espectadores = [];

function Espectador(idade,opiniao){
    this.idade = idade;
    this.opiniao = opiniao;
}


const opiniao3 = espectador.filter(e => e.opiniao === 3);
const media = opiniao3.reduce((acc, curr) => acc + curr.idade, 0) / opiniao3.length;
console.log(`A média das idades dos espectadores que responderam ótimo é ${media}`);
const opiniao1 = espectador.filter(e => e.opiniao === 1).length;
console.log(`A quantidade de espectadores que responderam regular é ${opiniao1}`);
const opiniao2 = espectador.filter(e => e.opiniao === 2).length;
const porcentagem = Math.round((opiniao2 / espectador.length) * 100, 2);
console.log(`A porcentagem de espectadores que responderam bom é ${porcentagem}%`);

