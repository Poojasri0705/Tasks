// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("Hello"));  
// console.log(reverseString("JavaScript"));  

// -------------------------------------------------------------------------

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial(5));  
// console.log(factorial(3));  
// console.log(factorial(0));  

// ---------------------------------------------------------------


// function fibonacci(n) {
//     const fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fib.push(fib[i - 1] + fib[i - 2]);
//     }
//     return fib.slice(0, n); 
// }
// console.log(fibonacci(5));  
// console.log(fibonacci(10)); 

// -------------------------------------------------------------


// function stringOperations(str) {
//     return {
//         length: str.length,
//         uppercase: str.toUpperCase(),
//         lowercase: str.toLowerCase()
//     };
// }
// console.log(stringOperations("Hello World"));  

// --------------------------------------------------------------------------

// function countVowels(str) {
//     const vowels = "aeiouAEIOU";
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         for (let j = 0; j < vowels.length; j++) {
//             if (char === vowels[j]) {
//                 count++;
//                 break; 
//             }
//         }
//     }
    
//     return count;
// }
// console.log(countVowels("Hello World"));  
// console.log(countVowels("JavaScript"));

// // ----------------------------------------------------------------------

// function flattenArray(nestedArray) {
//     let result = [];
//     for (let i = 0; i < nestedArray.length; i++) {
//         if (Array.isArray(nestedArray[i])) {
//             result = result.concat(flattenArray(nestedArray[i]));
//         } else {
//             result.push(nestedArray[i]);
//         }
//     }
//     return result;
// }
// console.log(flattenArray([1, [2, [3, 4], [5]]]));  
// console.log(flattenArray([[1, 2], [3, [4, 5]]]));  



