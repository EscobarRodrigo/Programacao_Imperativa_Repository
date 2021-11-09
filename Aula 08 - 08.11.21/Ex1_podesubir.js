// entre 1.40 e 2.00 pode subir
// entre 1.20 e 1.40 pode subir com acompanhante
// menor que 1.20 e maior que 2.00 não pode subir

function podeSubir(altura, acompanhada) {
    if (altura >= 1.4 && altura <= 2) {
      console.log(
        "Altura: " + altura + " Acompanhada: " + acompanhada + " => Acesso autorizado");
      return true;
    } 
    
    else if (altura >= 1.2 && altura < 1.4 && acompanhada == true) {
      console.log("Altura: " + altura + " Acompanhada: " + acompanhada + " => Acesso autorizado");
      return true;
    }
    
    else if (altura >= 1.2 && altura < 1.4 && acompanhada == false) {
      console.log("Altura: " + altura + " Acompanhada: " + acompanhada + " => Acesso autorizado somente com acompanhante");
      return true;
    } 
    
    else {
      console.log("Altura: " + altura + " Acompanhada: " + acompanhada + " => Acesso negado");
      return false;
    }
  }
  
  console.log(podeSubir(1.5, true));
  console.log(podeSubir(1.5, false));
  console.log(podeSubir(1.3, true));
  console.log(podeSubir(1.3, false));
  console.log(podeSubir(1.1, true));
  console.log(podeSubir(1.1, false));
  console.log(podeSubir(1.7, false));
  console.log(podeSubir(1.25, false));
  console.log(podeSubir(1.2, true));
  console.log(podeSubir(2.1, false));