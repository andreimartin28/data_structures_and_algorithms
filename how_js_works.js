// memory heap - global variables
// const a = 1;
// const b = 10;
// const c = 100;

// call stack
// console.log('1');
// console.log('2');
// console.log('3');

// const one = () => {
//     const two = () => {
//         console.log('4')
//     }
//     two()
// }

// 3rd called console.log('4')
// 2nd called two()
// 1st called one() 
// call stack 

// and then its going to remove:
// the console log
// two()
// one()
// in this order


// js is single threaded language that can be non-blocking?
// single-threaded = it has only one call stack
//                   one thing at a time => first in, last out

// cons in multi-threaded environments => deadlocks

// synchronous programming => line 1 gets executed
//                            line 2 gets executed
//                            line 3 and so on...


// stack overflow
// recursion - a function that calls itself
// function foo(){
//     foo()
// }
// foo()

// it keeps looping over and over
// we keep adding foo() over and over... so we have a stack overflow


// js engine - V8 in chrome -> has memory heap and call stack

// synchronous - its predictable but can get slow


// asynchronous
// call stack
// console.log('1');
// setTimeout(()=> {
//     console.log('2')
// }, 2000)
// console.log('3')\

// js run-time environment
// - web APIs (setTimeout is part of web APIs)
// - callback queue
// - event loop


// setTimeout(()=> {
//     console.log('2')
// }, 2000)
// CALL STACK

// setTimeout(), 2000
// WEB API

// callback()
// CALBACK QUEUE


// EVENT LOOP

// element.addEventListener('click', () => {
// console.log('click')    
// })

// js singlethreaded and non-blocking
// it can be asynchronous with callback functions

// synchronous vs asynchronous