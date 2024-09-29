var num1 = 5;
var num2 = 4;
var operators = ("%");

switch (operators) {
    case '+':
        console.log(num1 + num2)
        break;
    case '-':
        console.log(num1 - num2)
        break;
    case '*':
        console.log(num1 * num2)
        break;
    case '/':
        console.log(num1 / num2)
        break;
    case '%':
        console.log(num1 % num2)
        break;
    default:
        console.log(invalid, operators)
}


// ---------------------------------------------------------------------------------

// for (var i = 1; i <= 10; i++) {
//     console.log(i * 5);
//   } 

// -------------------------------------------------------------------------------

  // for (var i = 1; i <= 100; i++) {
  //   if (i % 3 === 0 && i % 5 === 0) {
  //     console.log("FizzBuzz");
  //   } else if (i % 3 === 0) {
  //     console.log("Fizz");
  //   } else if (i % 5 === 0) {
  //     console.log("Buzz");
  //   } else {
  //     console.log(i);
  //   }
  // }

// ------------------------------------------------------------------------------



// var factorial = 1;
// for (var  i = 1; i <=5; i++) {
//     factorial *= i;
// }
// console.log("Factorial of " + 5 + " is " + factorial);