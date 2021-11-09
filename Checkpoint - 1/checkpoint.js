
// pipoca = 10
// macarrão = 8
// Carne = 15
// Feijão = 12
// Brigadeiro = 8

// PIPOCA
   function usarMicroondas(prato, tempo) {
    switch (true) {
      case tempo <= 9:
        return "Tempo insuficiente";

      case tempo >= 10 && tempo <= 19:
        return "Prato pronto, bom apetite!";

      case tempo >= 20 && tempo <= 29:
        return "A comida queimou.";

      case tempo >= 30:
        return "Kabum!";

    }
    switch (prato) {
      case "pipoca":
        return (tempo);
    }
  }


// // MACARRÃO
  function usarMicroondas(prato, tempo) {
    switch (true) {
      case tempo < 8:
        return "Tempo insuficiente";

      case tempo >= 8 && tempo <= 15:
        return "Prato pronto, bom apetite!";

      case tempo >= 16 && tempo <= 23:
        return "A comida queimou.";

      case tempo >= 24:
        return "Kabumm!";


    }
    switch (prato) {
      case "macarrão":
        return (tempo);
    }
  }

// CARNE = 15 segundos
function usarMicroondas(prato, tempo) {
    switch (true) {
      case tempo <= 14:
        return "Tempo insuficiente";

      case tempo >= 15 && tempo <= 29:
        return "Prato pronto, bom apetite!";

      case tempo >= 30 && tempo <= 59:
        return "A comida queimou.";

      case tempo >= 60:
        return "Kabumm!";


    }
    switch (prato) {
      case "carne":
        return (tempo);
    }
  }

  // FEIJÃO = 12 segundos
function usarMicroondas(prato, tempo) {
    switch (true) {
      case tempo <= 11:
        return "Tempo insuficiente";

      case tempo >= 12 && tempo <= 23:
        return "Prato pronto, bom apetite!";

      case tempo >= 24 && tempo <= 35:
        return "A comida queimou.";

      case tempo >= 36:
        return "Kabumm!";


    }
    switch (prato) {
      case "feijão":
        return (tempo);
    }
  }

  // BRIGADEIRO = 8 segundos
  function usarMicroondas(prato, tempo) {
    switch (true) {
      case tempo <= 7:
        return "Tempo insuficiente";

      case tempo >= 8 && tempo <= 15:
        return "Prato pronto, bom apetite!";

      case tempo >= 16 && tempo <= 23:
        return "A comida queimou.";

      case tempo >= 24:
        return "Kabumm!";

    }
    switch (prato) {
      case "brigadeiro":
        return (tempo);
    }
  }

console.log("PIPOCA");
console.log(usarMicroondas("pipoca", 9));
console.log(usarMicroondas("pipoca", 12));
console.log(usarMicroondas("pipoca", 21));
console.log(usarMicroondas("pipoca", 40));
console.log("---------------------------------");

console.log("MACARRÃO");
console.log(usarMicroondas("macarrão", 7));
console.log(usarMicroondas("macarrão", 9));
console.log(usarMicroondas("macarrão", 23));
console.log(usarMicroondas("macarrão", 60));
console.log("---------------------------------");

console.log("CARNE");
console.log(usarMicroondas("carne", 14));
console.log(usarMicroondas("carne", 20));
console.log(usarMicroondas("carne", 35));
console.log(usarMicroondas("carne", 61));
console.log("---------------------------------");

console.log("FEIJÃO");
console.log(usarMicroondas("feijão", 14));
console.log(usarMicroondas("feijão", 20));
console.log(usarMicroondas("feijão", 35));
console.log(usarMicroondas("feijão", 61));
console.log("---------------------------------");

console.log("BRIGADEIRO");
console.log(usarMicroondas("brigadeiro", 7));
console.log(usarMicroondas("brigadeiro", 9));
console.log(usarMicroondas("brigadeiro", 23));
console.log(usarMicroondas("brigadeiro", 60));
console.log("---------------------------------");


