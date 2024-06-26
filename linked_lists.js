// 08 Data structures - LINKED LISTS

// singly and doubly linked lists

// singly linked list - a set of nodes - 1 node = 2 elements -> 1 element(first=head)= value of the data, 1 element(last=tail) = pointer to the next node
// they are null terminated -> the end of the list -> null

// const basket = ['apples', 'grapes', 'pears'];

// PSEUDO CODE

// 1st diagram
// linked list: appples   -->    grapes    --->        pears
            // 1st pnt  2nd pnt  1st pnt   2nd pnt    1st pnt


// 2nd diagram

// apples
// 8947   ---> grapes 
//             8742    ----> pears
//                             372 ---> null


// 089 - Exercise - Why Linked Lists

// i dont know...
// linked lists have of loose structure you can insert somewhere in the middle just by resetting some pointers
// this is the same for inserting, deleting here
// array elemets are indexed
// in linked lists you have to traverse the list to the 5th element from the very beggining
// you start from the head to the end of the linked list
// most computers have caching systems
// array are located next to each other
// linked lists are located all over the memory - like hash tables
// iterating in linked lists is slower than in arrays even tho both are O(n)
// inserts that are in the middle are a lot better than in the array
// delete nodes easier than in the array
// linked list is in some of order -> you can order

// prepend O(1) - add to the beggining of the list
// append O(1) - add to the end of the list
// lookup O(n) - we want to find 10 for example...
// insert O(n) - we have to go one by one to insert to a given index
// delete O(n) - to delete an item from an index we also have to go one by one



// 091 - Pointer

// apples 
//  8947  ---> grapes
//              8742    ---->  pears
//                             372  ---> null

// pointer - is a reference to another object/ node


// let obj1 = { a:true };
// let obj2 = obj1; // pointer 
// obj1.a = 'booya';
// delete obj1;
// obj2 = 'hello';
// console.log('1',obj1) // they both point to the same location in memory
// console.log('2',obj2) 


// conclusion: a pointer is simply a reference to something else in memory


// 092 - Our first linked list

// 10 ---> 5 ---> 16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }


// class Node {
//     constructor(value) {
//         this.value = value,
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor(value) {
//         this.head = {
//             value: value,
//             next: null
//         }
//         this.tail = this.head;
//         this.length = 1;
//     }
//     append(value) {
//         const newNode = {
//             value: value,
//             next: null
//         };
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//         return this;
//     }
//     prepend(value) {
//         const newNode = {
//             value: value,
//             next: null
//         };
//         newNode.next = this.head;
//         this.head = newNode
//         this.length++;
//         return this
//     }
//     printList() {
//         const array = [];
//         let currentNode = this.head;
//         while (currentNode !== null) {
//             array.push(currentNode.value)
//             currentNode = currentNode.next
//         }
//         return array;
//     }
//     insert(index, value) {
//         // check the parameters
//         if (index >= this.length) {
//             return this.append(value)
//         }
//         const newNode = {
//             value: value,
//             next: null
//         };
//         const leader = this.traverseToIndex(index-1)
//         const holdingPointer = leader.next
//         leader.next = newNode
//         newNode.next = holdingPointer;
//         this.length++;
//         return this.printList()
//     }
//     traverseToIndex(index) {
//         // check for params ...
//         let counter = 0;
//         let currentNode = this.head;
//         while (counter !== index) {
//             currentNode =  currentNode.next;
//             counter++;
//         }
//         return currentNode;
//     }
//     remove(index) {
//     // check the paramters ...
//     const leader = this.traverseToIndex(index-1);
//     const unwantedNode = leader.next;
//     leader.next = unwantedNode.next;
//     this.length--;
//     return this.printList();
//     }
    // reverse() {
    // code here
// }
// }
// insert
// *    *
//  \  /
//   *

// delete
// * - *
//  \ /
//   * 

// 1 ---> 10 ---> 5 ---> 16  // prepend
// 1 ---> 10 ---> 9 ---> 5 ---> 16 // append


// const myLinkedList = new LinkedList(10);
// console.log(myLinkedList)
// console.log(myLinkedList.append(5)); // O(1)
// console.log(myLinkedList.append(16));
// console.log(myLinkedList.prepend(1)); // O(1)
// console.log(myLinkedList.printList());
// console.log(myLinkedList.insert(2, 99)); // O(n)
// console.log(myLinkedList.insert(20, 88));
// console.log(myLinkedList.printList());
// console.log(myLinkedList.remove(2)); // O(n)
// console.log(myLinkedList.remove(2));

// this is the end of singly linked list



// 100 DOUBLY Linked Lists 

// class DoublyLinkedList {
//     constructor(value) {
//         this.head = {
//             value: value,
//             next: null,
//             prev: null
//         }
//         this.tail = this.head;
//         this.length = 1;
//     }
//     append(value) {
//         const newNode = {
//             value: value,
//             next: null,
//             prev: null
//         };
//         newNode.prev = this.tail
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//         return this;
//     }
//     prepend(value) {
//         const newNode = {
//             value: value,
//             next: null,
//             prev: null
//         };
//         newNode.next = this.head;
//         this.head.prev = newNode
//         this.head = newNode
//         this.length++;
//         return this
//     }
//     printList() {
//         const array = [];
//         let currentNode = this.head;
//         while (currentNode !== null) {
//             array.push(currentNode.value)
//             currentNode = currentNode.next
//         }
//         return array;
//     }
//     insert(index, value) {
//         // check the parameters
//         if (index >= this.length) {
//             return this.append(value)
//         }
//         const newNode = {
//             value: value,
//             next: null,
//             prev: null
//         };
//         const leader = this.traverseToIndex(index-1)
//         const follower = leader.next;
//         leader.next = newNode;
//         newNode.prev = leader;
//         newNode.next = follower;
//         follower.prev = newNode;
//         this.length++;
//         console.log(this)
//         return this.printList()
//     }
//     traverseToIndex(index) {
//         // check for params ...
//         let counter = 0;
//         let currentNode = this.head;
//         while (counter !== index) {
//             currentNode =  currentNode.next;
//             counter++;
//         }
//         return currentNode;
//     }
//     remove(index) {
//     // check the parameters
//     const leader = this.traverseToIndex(index-1);
//     const unwantedNode = leader.next;
//     leader.next = unwantedNode.next;
//     this.length--;
//     return this.printList();
//     }

// }


// const myLinkedList = new DoublyLinkedList(10);
// console.log(myLinkedList.append(5));
// console.log(myLinkedList.append(16));
// console.log(myLinkedList.prepend(1));
// console.log(myLinkedList.printList());
// console.log(myLinkedList.insert(2,99));
// console.log(myLinkedList.insert(20,80));
// console.log(myLinkedList.printList());
// console.log(myLinkedList.remove(2));
// console.log(myLinkedList.remove(2));






// 104 - EXERCISE reverse()

// [1, 10, 16, 88] -> reverse -> [88, 16, 10, 1]

// class LinkedList {
//     constructor(value) {
//         this.head = {
//             value: value,
//             next: null
//         }
//         this.tail = this.head;
//         this.length = 1;
//     }
//     append(value) {
//         const newNode = {
//             value: value,
//             next: null
//         };
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//         return this;
//     }
//     prepend(value) {
//         const newNode = {
//             value: value,
//             next: null
//         };
//         newNode.next = this.head;
//         this.head = newNode
//         this.length++;
//         return this
//     }
//     printList() {
//         const array = [];
//         let currentNode = this.head;
//         while (currentNode !== null) {
//             array.push(currentNode.value)
//             currentNode = currentNode.next
//         }
//         return array;
//     }
//     insert(index, value) {
//         // check the parameters
//         if (index >= this.length) {
//             return this.append(value)
//         }
//         const newNode = {
//             value: value,
//             next: null
//         };
//         const leader = this.traverseToIndex(index-1)
//         const holdingPointer = leader.next
//         leader.next = newNode
//         newNode.next = holdingPointer;
//         this.length++;
//         return this.printList()
//     }
    
//     traverseToIndex(index) {
//         // check for params ...
//         let counter = 0;
//         let currentNode = this.head;
//         while (counter !== index) {
//             currentNode =  currentNode.next;
//             counter++;
//         }
//         return currentNode;
//     }
    
//     remove(index) {
//     // check the paramters ...
//     const leader = this.traverseToIndex(index-1);
//     const unwantedNode = leader.next;
//     leader.next = unwantedNode.next;
//     this.length--;
//     return this.printList();
//     }
    
//     reverse() {
//         if(!this.head.next) {
//             return this.head;
//         }
//         let first = this.head;
//         this.tail = this.head;
//         let second = first.next;
//         while(second) {
//             const temp = second.next;
//             second.next = first;
//             first = second;
//             second = temp;
//         }
//         this.head.next = null
//         this.head = first
//         return this
//     }
// }

// const myLinkedList = new LinkedList(10);
// console.log(myLinkedList.append(5));
// console.log(myLinkedList.append(16));
// console.log(myLinkedList.prepend(1));
// console.log(myLinkedList.printList());
// console.log(myLinkedList.insert(2,99));
// console.log(myLinkedList.insert(20,88));
// console.log(myLinkedList.printList());
// console.log(myLinkedList.remove(2));
// console.log(myLinkedList.remove(2));
// [1, 10, 16, 88] -> reverse -> [88, 16, 10, 1]
// console.log(myLinkedList.reverse());



// Singly VS Doubly Linked Lists

// When should u use singly linked lists
// pros : simple implementation, less memory, delete and insert is a lil bit faster
// cons : cannot be iterated in reverse, if we loose reference to the head note we lost it forever
//when we have less memory, fast insertions and deletions, not that much searching

// When we use Doubly Linked Lists
// pros: can be iterated from both directions
//       if we delete a prev note, we dont need to traverse from the head note
// cons: fairly complex , requires more memory and storage
//       extra operations we need to perform for insert and delete
// really good when we dont have limitations on memory, good for searching


// ON INTERVIEWS YOU LL HAVE JUST SINGLY LINKED LISTS, YOU MAY BE ASKED THEORETICAL QUESTION ABOUT DOUBLY LINKED LISTS difference between them.


// it doesnt come in prebuilt in js


// LINKED LISTS

//     PROS                   CONS
// Fast insertions          Slow Lookup
// Fast Deletion            More Memory
// Ordered
// Flexible Size


// In conclusion: on the hashtable at set function we can implement a linked list