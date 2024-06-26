// 074 Hash Tables Introduction

// Hash Tables

// hash tables in programming languages
// python dictionaries
// js objects
// java maps
// ruby hashes

// hash table -> stores in an adress keys and values



// 075 - Hash Function

// SHA-256 take long time to generate hash
// MD5 128 bit output
// SHA256 256 bit output
// the longer the output, the more secure the hash function
// Time complexity - O(1) it happens really fast




// 076 - Hash collisions
//Hash Tables 

// insert O(1)
// lookup O(1), but sometimes O(n)
// delete O(1)
// search O(1)



// let user = {
//     age: 54, 
//     name: 'Kylie',
//     magic: true,
//     scream: function() {
//         console.log('ahhhhhh!');
//     }
// }

// console.log(user)
// console.log(user.age)
// console.log(user.spell='abra kadabra') // O(1)
// console.log(user)
// console.log(user.scream()) // O(1)

// CONS: hash table creates collisions => it creates linked lists
// collisions => when two insertions get into the same address

// it slows down a reading and writing with O(n/k) where k - size of the hash table
// so its an O(n)



// 77 Hash Tables in different languages
                                                                 
// Map in JS in ES6
// const a = new Map()
// even have functions as keys, or arrays as keys
// it maintains insertion order

// arrays inserts in order, maps also do this but hashmaps do not


// Sets - it only stores the keys
// const b = new Sets()

// all of them are hash tables



// 78 Implement a Hash Table

// class HashTable {

//     constructor(size){
//             this.data = new Array(size);
//         }

//     _hash(key) {
//         let hash=0;
//         for (let i=0; i < key.length; i++){
//             hash = (hash + key.charCodeAt(i)* i) %
//             this.data.length
//             // console.log(hash)
//         }
//         return hash;
//         }   
    
//     set(key, value) {
//         let address = this._hash(key)
//         if (!this.data[address]) {
//             this.data[address] = [];
//         }
//         this.data[address].push([key,value])
//         // console.log(this.data)
//         return this.data
//     }

//     get(key) {
//     let address = this._hash(key);
//     const currentBucket = this.data[address];
//     console.log(currentBucket);
//     if (currentBucket) {
//         for (let i=0; i< currentBucket.length; i++){
//             if(currentBucket[i][0] === key) {
//                 return currentBucket[i][1]
//             } 
//         }
//     }
//     return undefined
//     }

//     keys() {
//         const keysArray = [];
//         for (let i=0; i < this.data.length; i++) {
//             if (this.data[i]) {
//                 // console.log(this.data[i][0][0])
//                 keysArray.push(this.data[i][0][0])
//             }
//         }
//         return keysArray
//     }

// }


// const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 10000);
// myHashTable.set('apples', 54);
// myHashTable.set('oranges', 2)
// console.log(myHashTable.keys())
// myHashTable.keys();

// myHashTable.get('grapes');
// const myHashTable = new HashTable(2);
// console.log(myHashTable._hash('grapes'))
// console.log(myHashTable.get('grapes'))
// console.log(myHashTable.get('apples'))

// even thought it looks like O(n) it's actually O(1)
// O(n) if the list kept growing

// Another CON: we have a for loop through the entire space; we looped 50 times; in arrays we could just loop 3 times



// HASH TABLES VS ARRAYS

//              ARRAYS     |    HASH TABLES
//   search      O(n)      |       O(1)
//   lookup      O(1)      |       O(1)
//   insert      O(n)      |       O(1)
//   delete      O(n)      |       O(1)
//   push*       O(n)      |         -

// in arrrays we have indexes instead of keys
// hash tables let us use flexible keys instead of being stuck with 0, 1, 2, 3...
// hash tables has no concept of order
// in arrays each item was placed next to each other in the memory
// in hash tables they are placed all over the place



// 083 Exercise: First recurring character

// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5];
// It should return undefined


// my result: correct
// dict = [4,5,6,4]
// it should return 4

// function recurringChar(array) {
// const hm = new Map();
//     for (let i=0; i<array.length; i++) {
//         if (!hm.has(array[i])) {
//             hm.set(array[i], true)
//         } else if (hm.has(array[i])) {
//             return array[i]
//         } else {
//             return undefined
//         }
//     }
// }

// console.log(recurringChar(dict))


// Neagoie's answers

// SO THIS IS WRONG
// function firstRecurringCharacter(input) {
//     for (let i=0; i < input.length; i++) {
//         for (let j=i+1; j < input.length; j++) {
//             if(input[i] === input[j]) {
//                 return input[i];
//             }
//         }
//     }
//     return undefined
// } // time: O(n^2)
    // space : O(1)
// console.log(firstRecurringCharacter([1,2,3,4,1]))
// so this is wrong actually... it should input the first duplicates, not the first element with another duplicate it encounters... 


// THIS IS THE GOOD SOLUTION of neagoie's:  
// function firstRecurringCharacter2(input) {
//     let map = {}
//     for (let i=0; i<input.length; i++) {
//         if (map[input[i]] !== undefined) {
//             return input[i]
//         } else {
//             map[input[i]] = i
//         }
//         console.log(map)
//     }
//     return undefined
// } // time: O(n) ; space: O(1)
// console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]))



// 086 Hash table review
// HASH TABLES

// PROS
// Fast lookups - Good collision resolution needed
// Fast inserts
// Flexible keys

// CONS
// Unordered
// Slow key iteration

// in python 
// lists = arrays
// dict = hashmap