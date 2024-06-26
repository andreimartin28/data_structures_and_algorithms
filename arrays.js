
// Given 2 arrays, create a function that let's a user
// know (true/false) whether these two arrays contain
// any common items 

// For example
// const array1 = ['a', 'b', 'c' , 'x']
// const array2 = ['z', 'y', 'i'] 
// should return false
// -----------

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'r'];
// should return true.

// 2 parameters -- arrays - no size limit
// return true or false


// function containsCommonItem(arr1, arr2){
//     for (let i=0; i< arr1.length; i++ ){
//         for (let j=0; j< arr2.length; j++){
//             if (arr1[i] === arr2[j]) {
//                 console.log('true')
//                 return true;
//             }
//         }
//     }
//     console.log('false')
//     return false;
// }

// containsCommonItem(array1, array2);

// O(n^2) - daca era acelasi array
// O(a*b) - sunt diferite
// O(1) - space complexity - we are not creating variables

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'r'];

// array1 ==> obj {
// a: true
// b: true
// c: true
// x: true
// }
// array2[index] === obj.properties


// function containsCommonItem2(arr1, arr2) {
    // loop through first array and create object
// where properties === items in the array
// can we asume always 2 params?
    // let map = {};
    // for (let i=0; i < arr1.length; i++) {
    //     if(!map[arr1[i]]) {
    //        const item = array1[i];
    //        map[item] = true;
    //        }
    //     }

    // loop through second array and check if item in second
// array exists on created object.
//     for (let j=0; j < arr2.length; j++) {
//         if (map[arr2[j]]) {
//             console.log('true')
//             return true;
//         }
//     }
//     console.log('false')
//     return false;
// }

// containsCommonItem2(array1, array2)
// O(a + b) Time complexity
// we are creating a new object here => O(n) Space complexity


// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];

// i would google specific methods on arrays to make it more readable
// function containsCommonItem3(arr1, arr2) {
    // using some built in js check the first array
    // loop through arrays and then return if they have common element
//     return arr1.some(item => arr2.includes(item))
// }
// console.log('===' + containsCommonItem3(array1, array2))
// containsCommonItem3(array1, array2)



// modularize code

// console.log(Math.pow(6,1000))



// continue at 06/ Data Structures and Arrays
// 062 is the next video

// const strings = ['a', 'b', 'c', 'd'];
// indexes       0    1      2    3
// 4*4 = 16 bytes of storage

// console.log(strings[2]) // O(1) - this is a lookup
 
// push 
// strings.push('e');  // 0(1) - push to the last item

// pop - delete the last element
// strings.pop();
// strings.pop(); // O(1)

// unshift - add an element at the beggining of the array - but now we have to shift all the indexes
// strings.unshift('x'); // O(n)

// splice
// strings.splice(2, 0, 'alien') // O(n/2) -> O(n)

// console.log(strings)



// lookup O(1)
// append * O(1) - it also can be O(n)
// insert O(n)
// delete O(n)


// 063 Static vs Dynamic Array
// static - max number of elements before adding something ahead of time
// dynamic - copy and rebuilt an array at a new location if we want more memory

// C++
// int a[20];
// int b[5] {1,2,3,4,5}


// const strings = 
// ['a', 'b', 'c', 'd', 'e'];

// if we had from a->b we add e -> it will make from 4 to 8 blocks => O(n)


// 065 Optional Classes in JS
// REFERENCE TYPE
// console.log([] === []);
// console.log([1] === [1]);
// var object1 = {value:10};
// var object2 = object1;
// var object3 = {value:10};
// console.log(object1 === object3)
// object1.value = 15
// console.log(object1.value)
// console.log(object2.value)
// console.log(object3.value)
// console.log([]===[])

// CONTEXT VS SCOPE
// function b() {
//     let a = 4; 
// }
// console.log(this)
// console.log(this === window)

// console.log(this.alert("hello"));

// function a() {
//     console.log(this)
// }
// console.log(a())
// a()

// const object4 = {
//     a: function() {
//         console.log(this);
//     }
// }

// console.log(object4.a());

// INSTANTIATION
// class Player {
//     constructor(name, type) {
//         console.log('player',this);
//         this.name = name;
//         this.type = type;
//     }
//     introduce() {
//         console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
//     }
// }

// class Wizard extends Player {
//     constructor(name, type) {
//         super(name, type)
//         console.log('wizard', this);
//     }
//     play() {
//         console.log(`WEEEEE I'm a ${this.type}`);
//     }
// }

// const wizard1 = new Wizard("Shelly", "Healer");
// const wizard2 = new Wizard("Shawn", "Dark Magician");

// console.log(wizard1.play())
// console.log(wizard1.introduce())
// console.log(wizard2.play())
// console.log(wizard2.introduce())


// 066 - Implementing an array

// const a = [];

// Build out on our own

// class MyArray {
//     constructor() {
//         this.length = 0
//         this.data = {};
//     }

//     get(index) {
//         return this.data[index]
//     }

//     push(item) {
//         this.data[this.length] = item;
//         this.length++;
//         return this.length;
//     }
    
//     pop() {
//         const lastItem = this.data[this.length-1];
//         delete this.data[this.length-1];
//         this.length--;
//         return lastItem;
//     }

//     delete(index) {
//         const item = this.data[index];
//         this.shiftItems(index)
//         return item;
//     }

//     shiftItems(index) {
//         for (let i = index; i < this.length-1; i++)
//             {
//                 this.data[i] = this.data[i+1]
//             }
//             delete this.data[this.length-1];
//             this.length--; 
//     }
// }

// [0,1,2] => [1,2,2]
// [0,2] => [2,2]

// const newArray = new MyArray();
// console.log(newArray);
// console.log(newArray.get(0));

// newArray.push('hi');
// newArray.push('you');
// newArray.push('!');
// newArray.delete(0)
// newArray.push('are');
// newArray.push('nice');
// newArray.delete(1);
// console.log(newArray);
// newArray.pop();
// newArray.pop();
// console.log(newArray)




// 067 Strings and Arrays

// String Question? Reverse a string for example
// Answer: Treat the string like an array
//         convert it into an array, do a loop, or a split() in js
//          reverse it, and return it as a string after



// 068 Exercise - Reverse a String
       // Create a function that reverses a string:
       // 'Hi My name is Andrei' should be:
       // 'ierdnA si eman yM iH'
       
// function reverse(str) {
//     string = 'Hi My name is Andrei'
//     string = string.split("")
//     string = string.reverse()
//     string = string.join("")
//     console.log(string)
//     return string
// }

// reverse()
// my solution: it works

// Neagoie's solution now:

//1st SOLUTION

// function reverse(str){
    // check input
//     if (!str || str.length < 2 || typeof str !== 'string') {
//         return 'hmm that is not good'
//     }

//     const backwards = [];
//     const totalItems = str.length - 1;
//     for (let i = totalItems; i >= 0; i--) {
//         backwards.push(str[i]);
//     }
//     console.log(backwards.join(''))
//     return backwards.join('')
// }

// reverse('Hi My name is Andrei')

// Solution 2: The same as mine
// function reverse2(str) {
//     console.log(str.split('').reverse().join(''))
//     return str.split('').reverse().join('')
// }

// reverse2('Hi My name is Andrei')


// Solution 3: 1 line function - ES6

// const reverse3 = str => [...str].reverse().join('')
// reverse3('Hi My name is Andrei')



// 70 Merge Sorted Arrays

// [0,3,4,4,6,30,31]


// my solution
// function mergeSortedArrays(array1, array2) {
//     const array3 = []
//     for (let i=0; i<= array1.length-1 ; i++) {
//         array3.push(array1[i])
//     }

//     for (let j=0; j<= array2.length-1; j++) {
//         array3.push(array2[j])
//     }
//     console.log(array3)
//     return array3
// }

// mergeSortedArrays([0,3,4,31], [4,6,30]);


// Neagoie's solution

// function mergeSortedArrays(array1, array2) {
//     const mergedArray = []
//     let array1Item = array1[0]
//     let array2Item = array2[0]
//     let i=1;
//     let j=1;
    // check input
//     if (array1.length === 0) {
//         return array2
//     }

//     if (array2.length === 0) {
//         return array1
//     }

//     while (array1Item || array2Item) {
//         console.log(array1Item, array2Item)
//         if (!array2Item || array1Item < array2Item) {
//             mergedArray.push(array1Item)
//             array1Item = array1[i]
//             i++;
//         } else {
//             mergedArray.push(array2Item);
//             array2Item = array2[j];
//             j++;
//         }
//     }
//     console.log(mergedArray)
//     return mergedArray
// }

// mergeSortedArrays([0,3,4,31], [4,6,30]);


// mine's correct as well, his also so that's good

// 073 Arrays are good for +

// PROS

// Fast Lookups
// Fast push/pop
// Ordered

// CONS

// Slow inserts
// Slow deletes
// Fixed size* if using static array


