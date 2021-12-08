
// Micro desafio - Passo 1

// Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.


// "objeto literal:"

// let moer = {
//     nome: 'BoraMoer',
//     faltas: 0,
//     notas: [10, 10, 10, 10]
// }

// "funcao construtora de alunos:Passo 2"

let Aluno = function(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = function() {
        return this.notas.reduce((acumulador, elemento) => acumulador + elemento)/this.notas.length
    };
    this.adicionarFalta = function() {
        return this.faltas++
    }
};

// exportando objeto:

module.exports = Aluno;