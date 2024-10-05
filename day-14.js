// var numbers = [23, 45, 67, 12, 89, 34]
// max = numbers[0]; {
//     for (var i = 1; i < numbers.length; i++) {
//         if (numbers[i] > max) {
//             max = numbers[i];
//         }
//     }
//     console.log(max);
// }

// ------------------------------------------------------------------


// var numbers = [1, 2, 3, 4, 5];
// console.log(numbers.reverse())

// ---------------------------------------------------------------------




// var first = [1, 2, 3];
// var second = [4, 5, 6];
// var third = [7, 8, 9];
// var tenth = first.concat(second);
// // console.log(tenth);
// console.log(tenth.concat(third));

// ----------------------------------------------------------------------

// var numbers = [1, 2, 3, 1, 2, 4, 5, 4, 6];
// var eq=[]
// for(i=0;i<numbers.length;i++){
// var count=0;
//     for(j=0;j<i;j++){
//         if(numbers[i]==numbers[j]){
//             count++;
//         }
//     }
//     if(count==0){
//        var newArray = eq.push(numbers[i])
//     }
// }


// -----------------------------------------------------------------------------

// var array = [1, 2, 3, 4, 5, 6, 7];
// var matrix = []
// for(i=0;i<array.length;i++){
//     // console.log(array[i])
//     for(j=i+1;j<array.length;j++){
//         if(array[i]+array[j]==8)
//         // console.log(array[i],array[j])
//     matrix.push([array[i],array[j]])
//     }

// }
// console.log(matrix)

// ---------------------------------------------------------------------------


const numbers = [1, 2, 3, 4, 5];

function calculateAverage(arr) {
    // Calculate the sum of the array elements
    const sum = arr.reduce((acc, num) => acc + num, 0);
    // Calculate the average
    const average = sum / arr.length;
    return average;
}

const average = calculateAverage(numbers);
console.log(`The average of the array elements is: ${average}`);

