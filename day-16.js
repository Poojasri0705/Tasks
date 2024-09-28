// var book = {
//     title: "Alice in Wonderland",
//     author: "Lewis Carrol",
//     yearPublished: "1865",
//     genre:"a genre that presents the reader with a completely new world after passing through a magical entrance.",
// }
// console.log(book)

// console.log(book.title)
// console.log(book.author)
// console.log(book.yearPublished)
// console.log(book.genre)

// console.log(book["title"])
// console.log(book["author"])
// console.log(book["yearPublished"])
// console.log(book["genre"])

// -------------------------------------------------------



// var car ={
//     make: "Hyundai Motor Company",
//     model: "autoNexus",
//     year: 1948,
//     color: "red"
// }
// car.color="blue";
// delete car.year;
// console.log(car["color"])
// console.log(car["year"])
// console.log(car["model"])
// console.log(car["make"])

// ---------------------------------------------------------------------


// var student = {
//     name:"pooja",
//     age:19,
//     address:{
//         street:"Robertson pet",
//         city:"MTM",
//         state:"AP"
//     },
//     courses:{
//         stream:"BCA",
//         grade:8.6
//     }

// }
// console.log(student.address)
// console.log(student["courses"]["grade"])

// -------------------------------------------------------------------------


// var employee = {
//     name:"Ramesh",
//     position:"HR",
//     department:"civil",
//     salary: "2LP"
// }
// // console.log(employee["salary"])
// for( var key in employee)
//     // console.log(key)
// console.log(employee[key])

// ----------------------------------------------------------



// var calculator = {
//     num1: 25,
//     num2: 10,
//     add: function() {
//       return this.num1 + this.num2;
//     },
//     subtract: function() {
//       return this.num1 - this.num2;
//     },
//     multiply: function() {
//       return this.num1 * this.num2;
//     },
//     divison: function() {
//       return this.num1 / this.num2;
//     }
//   };
// console.log("add:",calculator["add"]())
// console.log("subtract:",calculator["subtract"]())
// console.log("multiply;",calculator["multiply"]())
// console.log("divison:",calculator["divison"]())

// -----------------------------------------------------------------------------------


// var company = {
//     name: "softech",
//     location: "hyderabad",
//     employees: {
//       raju: "data analyst",
//       rohit: "sales executer",
//       rakesh:"software engineer"
//     }
//   };
//     for ( var key  in company ) {
//         console.log(key)
//         // console.log(company[key])
//     }
//     for( var key in company.employees){
//         console.log(key)
//         console.log(company.employees[key])
//     }


// -----------------------------------------------------------------------------------------------

// var people ={
//    mahesh:28,
//    ramu:30,
//    sathish:34,
//    venkat:55   
// };
// var totalAge=0;
// var count=0;
// for(var person in people){
//     totalAge+=people[person];
//     count++;
// }
// var averageAge=totalAge/count;
// console.log(averageAge)
