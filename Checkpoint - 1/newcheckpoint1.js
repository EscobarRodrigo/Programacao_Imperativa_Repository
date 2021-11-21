// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

let prato1 = "pipoca" //10 segundos (padrão);
// let prato2 = "macarrão+brigadeiro"; // 8 segundos (padrão);
// let prato3 = "carne"; // 15 segundos (padrão);
// let prato4 = "feijão" // 12 segundos (padrão);


function microondas (prato,tempo) {

if (tempo >=10 && tempo <=19) {
    return "Prato pronto, bom apetite! Coma devagar! " + tempo + " segundos selecionados";
}

else if (tempo >=20 && tempo <=29) {
    return "Comida QUEIMADA - Diminuir tempo na próxima! " + tempo + " segundos selecionados";
}

else if (tempo && tempo  <10) {
    return "Tempo Insuficiente - Aumentar tempo! " + tempo + " segundos selecionados";
}

else if (tempo && tempo  >=30) {
    return "KABUMM - Perdeu tempo e ainda estragou o Micro da Vó! " + tempo + " segundos selecionados";
}

else {
    console.log ("Opção Inexistente parceiro. Escolhe direito :)")
}

}
console.log(microondas("pipoca",30));
