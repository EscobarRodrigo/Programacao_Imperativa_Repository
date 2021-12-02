

let loopDePares = (a) => {
    for (let i = 0; i <=100; i++) {
        if ((i +a) % 2 == 0) {
        let soma = i + a;
        console.log ("o numero " + soma + " é par")
    }
    else {
        console.log(i);
        }
    }
}
// loopDePares(2);


let loopDeImpares = (a,palavra) => {
    for (let i = 0; i <=100; i++) {
        if ((a+i) % 2 !=0) {
       console.log ("Deu certo? É impar " + palavra)
    }
    else {
        console.log(i);
        }
    }
}
// loopDeImpares(2, "#foi" );



let populaArray = (n)  => {
    let novoarray = [];
    let qtd = n;

    for (let i = 0; i <=qtd; i++) {
        novoarray.push(i);        
    }
    console.log(novoarray);

    let soma = novoarray.reduce(
    function(acumulador, n){
    return acumulador + n;
    });

    return soma;
}

console.log(populaArray(8));