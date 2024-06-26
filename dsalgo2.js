// const cutii = [1,2]

// function compressFirstBox(boxes) {
//     console.log(boxes[0])
// }

//  O(1) - Constant Time

// compressFirstBox(cutii);

// const boxes = [0,1,2,3,4,5]

// function logFirstTwoBoxes(boxes) {
//     console.log(boxes[0]); // 0(1)
//     console.log(boxes[1]); // O(1)
// }

// logFirstTwoBoxes(boxes) // O(2) 


// // exercise from A. Neagoie
// // What is the Big O of the below function? (Hint, you may want to go line by line)
// function funChallenge(input) {
//     let a = 10; // O(1)  
//     a = 50 + 3; // O(1)
  
//     for (let i = 0; i < input.length; i++) { // O(n)
//       anotherFunction(); // O(n)
//       let stranger = true; // O(n)
//       a++; // O(n)
//     } 
//     return a; // O(1)
//   }

  // 3 * O(1) + 4 * O(n) = O(2) + O(4n) = O(n)
  // BIG O(3 + 4n) => O(n)




  


// What is the Big O of the below function? (Hint, you may want to go line by line)
// function anotherFunChallenge(input) {
//     let a = 5; // O(1)
//     let b = 10; // O(1)
//     let c = 50; // O(1)
//     for (let i = 0; i < input; i++) { // O(n) 
//         let x = i + 1; // O(n)
//         let y = i + 2; // O(n)
//         let z = i + 3; // O(n)
//     }
//     for (let j = 0; j < input; j++) { // O(n)
//         let p = j * 2; // O(n)
//         let q = j * 2; // O(n)
//     }
//     let whoAmI = "I don't know"; // O(1) 
// }

// Total: Big O(4 + 7n) = O(n)




// RULE BOOK
// RULE 1: WORST CASE
// -> if we have found a solution, is the most efficient one?

// the first example

// const nemo = ['nemo'];
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill','bloat','nigel','squirt']
// const large = new Array(10000).fill('nemo')
// function findNemo(array) {
//     for (let i = 0; i < array.length; i++) { // O(n)
//         console.log('running')
//         if (array[i] === 'nemo') {
//             console.log('Found Nemo');
//             break; // the efficient solution :D
//         }
//     }
// }

// findNemo(everyone); // O(n)



// RULE 2: REMOVE CONSTANTS

// function printFirstItemThenFirstHalfThenSayHi100Times(items) {
//     console.log(items[0]); // O(1)

//     var middleText = Math.floor(items.length / 2); // O(1)
//     var index = 0;// O(1)

//     while (index < middleIndex) { // O(n/2)
//         console.log(items[index])
//         index++;
//     }

//     for (var i=0; i<100; i++) { // O(100)
//         console.log('hi')
//     }
// }

// BIG O(3 + n/2 + 100) = O(n/2) = O(n)


// function compressBoxesTwice(boxes) {
//     boxes.forEach(function(boxes) {
//         console.log(boxes);
//     }); // O(n)
    
//     boxes.forEach(function(boxes) {
//         console.log(boxes);
//     }); // O(n)
// }

// BIG O(2n)= O(n)


// RULE 3: Different terms for inputs

// function compressBoxesTwice(boxes, boxes2) {
//     boxes.forEach(function(boxes) {
//         console.log(boxes);
//     }); // O(n)
    
//     boxes2.forEach(function(boxes) {
//         console.log(boxes);
//     }); // O(m)
// }

// // O(n + m)



// Log all pairs of array
// const boxes = ['a','b','c','d','e'];

// function logAllPairsOfArray(array) {
//     for (let i=0; i < array.length; i++)
//         for (let j=0; j < array.length; j++)
//     console.log(array[i], array[j])            
// }

// logAllPairsOfArray(boxes);

// O(n * n)= O(n^2)
// O(n^2) - Quadratic Time


// If they were diff arrays we looped through

// const boxes1 = ['a','b','c','d','e'];
// const boxes2 = ['a', 'b', 'c']

// function logAllPairsOfArray(array1, array2) {
//     for (let i=0; i < array1.length; i++)
//         for (let j=0; j < array2.length; j++)
//     console.log(array1[i], array2[j])            
// }

// logAllPairsOfArray(boxes1, boxes2);

// O(a*b) or O(n*m)


// RULE NO 4: 
// function printAllNumbersThenAllPairSums(numbers) {
    
//     console.log('these are numbers:'); 
//     numbers.forEach(function(number) {
//         console.log(number);
//     });

//     console.log('and these are their sums:')
//     numbers.forEach(function(firstNumber) {
//         numbers.forEach(function(secondNumber) {
//             console.log(firstNumber + secondNumber);   
//         }); 
//     });
// }

// printAllNumbersThenAllPairSums([1,2,3,4,5])
 
// O(n) + O(n^2) => O(n^2)

    // forEach
    //     forEach
    //         forEach

// O(n^3) and so on...


// O(n!) Factorial- you are adding a loop for every element

// Which code is the best?
// READABLE
// MEMORY
// SPEED
 

// SPACE COMPLEXITY

// the heap and the stack
// heap = where we store variables
// stack = where we keep track of our function calls 

// function boooo(n) { 
//     for (let i = 0; i < n.length; i++) {
//         console.log('booooo')
//     }
// }

// boooo([1,2,3,4,5]) 

// space complexity  let i = 0 adding memory => just 1 variable => O(1)

// function arrayOfHiNTimes(n) {
//     let hiArray = []; // created an array
//     for (let i = 0; i < n; i++) {
//         hiArray[i] = 'hi'; // fill the array with n loops => n times => space complexity: O(n)
//     }
//     return hiArray;
// }
// arrayOfHiNTimes(6) // space complexity: O(n)

// Find 1st, Find Nth...
// const array = [{
//     tweet:'hi',
//     date: 2012
// }, 
// {
//     tweet: 'my',
//     date: 2014
// }, {
//     tweet:'teddy',
//     date: 2018
// }];

// comparing each tweet with the other, nested loops
// O(n^2)

// 'hdsajhfgsjfas'.length  
// what is the O? ... Well IT DEPENDS of the language we are using!
// different built in methods from language to language
// its a property of js = length
// in js is O(1) - constant time


// JS LOOPS


// const nemo = ['nemo'];
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill','bloat','nigel','squirt']

// function findNemo(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 'nemo') {
//             console.log('Found Nemo!');
//         }
//     }
// }

// const findNemo2 = array => {
//     array.forEach(fish => {
//         if (fish == 'nemo') {
//             console.log('Found Nemo!')
//         }
//     });
// }

// const findNemo3 = array => {
//     for (let fish of array) {
//         if (fish == 'nemo') {
//             console.log('Found Nemo!')
//         }
//     }
// }

// findNemo(everyone);
// findNemo2(everyone);
// findNemo3(everyone);


