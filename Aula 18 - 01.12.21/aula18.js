

// function loopDePares (x) {

//     for (let i = 0; i <= 100; i++) {

//         let par = (x+i);
//         if (par %2 ==0 )
        
//     console.log ("o numero " + par + "é par")
        
        
// }
// }
// loopDePares(54);

function loopDePares (x) {
    for (let i = 1; i <= 100; i++){

        let somaxi = x + i

        if (somaxi % 2 == 0) {
            console.log("O número " + somaxi + " é par. (" + x + "+" + i + ")")
        }
        else{
            console.log(i)
        }

    }
}
// loopDePares(54);


"2"



function loopDeImpares (num,impar) {
    for (let i = 1; i <= 100; i++){

        let somayi = num + i

        if (somayi %1 == 0) {
            console.log(somayi + impar)
        }
      
    }
}
loopDeImpares(2,"impar");

"3"


function soma(n1){
    for (let i = 0; i <=100; i++) {
    }
    return n1 + n2
  }
  console.log(soma(10, 10))



