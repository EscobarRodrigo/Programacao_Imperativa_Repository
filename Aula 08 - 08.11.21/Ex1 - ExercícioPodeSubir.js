function podeSubir(altura, estaAcompanhado) {
    if((altura > 1.40 && altura < 2.00) || (altura > 1.40 && estaAcompanhado)) {
      console.log("Acesso autorizado")
    }else if(altura > 1.20 &&  altura < 1.40 && estaAcompanhado) {
      console.log("Acesso autorizado somente com acompanhante")
    }else{
      console.log("Acesso negado!")
    }
  }
  
  podeSubir(1.21, true)




