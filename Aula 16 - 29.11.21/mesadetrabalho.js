// "Versão Douglas"
// let FizzBuzz = (num1, num2, texto1, texto2) => {
//   for (let i = 1; i <= 100; i++) {
//     if (i % num1 == 0 && i % num2 == 0) {
//       console.log(`${texto1} ${texto2}`)
//     } else if (i % num1 == 0) {
//       console.log(texto1)
//     } else if (i % num2 == 0) {
//       console.log(texto2)
//     } else {
//       console.log(i)
//     }
//   }
// }

// FizzBuzz(2, 3, 'Ola', 'Mundo')

// "Versão Antônio"
// let fizzOrBuzz = () => {
//     for (n = 1; n <= 100; n++) {
//       let fizzBuzz = ''
//       if (n % 3 == 0) fizzBuzz += 'Fizz'
//       if (n % 5 == 0) fizzBuzz += 'Buzz'
//       console.log(fizzBuzz || n)
//     }
//   }
  
//   fizzOrBuzz()
  
"----------------------------------------------------------"

  let FizzBuzz = (a, b) => {
    for (i = 1; i <= 100; i++) {
      if (i % a == 0 && i % b == 0) {
        console.log("FizzBuzz");
      } else if (i % b == 0) {
        console.log("Buzz");
      } else if (i % a == 0) {
        console.log("Fizz");
      } else {
        console.log(i);
      }
    }
  };
  
  FizzBuzz(10, 50);