// STACKS AND QUEUES


// STACKS
// like plates stacks


// lookup O(n) - you usually dont wanna search through all this stack
// pop O(1) - remove the last item
// push O(1) - add a plate
// peek O(1) - view the top most plate


// Stacks arhitecture 
// -> browser history
// -> when you hit the back button or the front button
// -> undo or redo


// QUEUES

// lookup O(n)
// enqueue O(1)
// dequeue O(1)
// peek O(1)

// think about it like an entrance to a rollercoaster
// the first person at the entrance gets to go in the rollercoaster
// then the second, third and so on...

// It's the oposite of stack

// FIFO = First In, First out

// used a lot in programming problems and interview questions

// ex1: waitlist app to buy tickets for a concert that uses queues
// ex2: restaurant app wherece you check into the restaurant to see if you can get a table that uses queues
// ex3: Uber and Bolt apps
// ex4: a printer ; the person that clicks print first should have their first print out.
//                  same for the second and third and so on...


// enqueue O(1) -> like push -> add to the queue as the last item
// dequeue O(1) -> similar to pop -> remove the first item actually (pop removed the last item)
// peek O(1) -> the first item to come out  (VS Queue who looks for the last element)
// lookup O(n) -> we dont do. we're interested in enqueuing and dequeuing


// Q:Why dont you wanna use an array to build a queue?
// A: It's very inefficient, because we're removing the first item from the list
//    In arrays, if we unshift something, we remove the first item. 
//    If we do this, we have to shift all the remaining indexes.
//    In conclusion, it's really really bad.




// STACKS VS QUEUES


// STACKS

// we visit: 
// google
// udemy.com
// youtube

// the browser history will be displayed like this:

// youtube
// udemy.com
// google

// we can build STACKS with: 
// 1. Arrays -> cache locality -> makes them technically faster when accessing items in memory bc they are next to each other 
//           -> static or dynamic, we have certain amount of memory, it has to double the memory to create new space for it somewhere in memory

// 2. Linked Lists -> accessing items slower, they are scattered all over memory
//                 -> extra memory associated with them bc we have to hold on the pointers
//                 -> they have more dynamic memory

// Both work good, depending on the priority



// QUEUES

// we create them just with LINKED LISTS

// Matt -- Joy -- Samir -- Pavel
// Arrays -> not a good idea
// Linked Lists -> this is good

// if we use array -> O(n)
// ex : 0.      1.      2.      3
//     Matt -- Joy -- Samir -- Pavel

//   0.     1.        2.
//  Joy -- Samir -- Pavel
// So it's O(n) operation  -> NOT GOOD X 


// With Linked Lists: :D
//ex:  Head                    Tail
//      Matt -- Joy -- Samir -- Pavel

//   Head             Tail
// -- Joy -- Samir -- Pavel  
// So it's O(1) operation

// CONCLUSION: for STACKS - Arrays and Linked Lists - depending on the requirements
//             for QUEUES - Linked Lists - O(1) 

