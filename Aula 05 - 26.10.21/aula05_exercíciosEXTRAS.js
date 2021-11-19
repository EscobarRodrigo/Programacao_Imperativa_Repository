
// function (Vermelho), Mova (Norte), adicione (2, 2), console.log (“Olá Mundo”);
Math.random()
console.log( Math.random() );

function cumprimentarA(nome) {
    const mensagem = "Olá, seja bem vindo! "
    console.log(mensagem + nome);
   }
   
   cumprimentarA ("William");
   cumprimentarA("Danilo")
   

   function multiplicarPorDoisESomarCinco(x) {
    return 2 * x + 5
   }
   console.log (multiplicarPorDoisESomarCinco(10));
  
//    multiplicarPorDoisESomarCinco(Erick) // Erick não é um número
   const Erick= 50
   multiplicarPorDoisESomarCinco(Erick) //agora sim
   
   console.log(multiplicarPorDoisESomarCinco(Erick));

//SALVANDO UMA FUNÇÃO (multiplicarPorDoisESomarCinco) DENTRO DE UMA VARIÁVEL (valor)

   let valor = multiplicarPorDoisESomarCinco (Erick)
   console.log (valor);