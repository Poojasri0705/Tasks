// Traditional function :

// function multiply(a, b) {
//     return a * b;
// }

// Arrow function :
// let  multiply =(a,b) => (a*b)

// ------------------------------------------------------------------------------
// Traditional function :

// function isEven(num) {
//     return num % 2 === 0;
// }

// // // Arrow function :
// let isEven = (num) => (num % 2 === 0)

// ----------------------------------------------------------------------------------
// Traditional function :
// function sayHello() {
//     return 'Hello, world!';
// }
// console.log(sayHello)

// Arrow function :
// let sayHello = () => 'Hello, world!';
// ----------------------------------------------------------------------------------?

// Traditional function :
// function add(x, y, z) {
//     return x + y + z;
// }
// console.log(add(5,7,3))

// Arrow function :
// let  add = (x, y, z) =>   x + y + z;
// --------------------------------------------------------------------------------------

// function subject1() {
//     let subject1 = "Telugu";
  
//     function subject2() {
//       let subject2 = "English";
  
//       function subject3() {
//         let subject3 = "Hindi";
  
//         console.log(subject1); 
//         console.log(subject2); 
//         console.log(subject3); 
//       }
  
//       subject3();
//     }
  
//      subject2();
//   }
  
//   subject1();

// ---------------------------------------------------------------------------


function newCounter() {
    let count = 0;
  
    return {
      increment: function() {
        count++;
        return count;
      },
      decrement: function() {
        count--;
        return count;
      },
      
    };
  }
  
  let call = newCounter();
  
  console.log(call.increment()); 
  console.log(call.increment()); 
  console.log(call.decrement()); 
  console.log(call.decrement()); 
  console.log(call.increment());







