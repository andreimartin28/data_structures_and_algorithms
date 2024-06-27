// Solid principles

// 1st
// S=Single Responsibility 
// -the class should have a single responsibility
// -giving a class multiple responsibility - when we want to make a change we are more likely to introduce bugs
// - single responsability != single job
// - everything it does should be very closely related so we dont end up with bloated classes


// 2st 
// O = Open-Closed Principle
// - open to extension but closed to modification
// - if we need to add some additional functionalitiy to the app then we shouldnt be editing the existing classes or methods to do that
// - any changes we could make now would cause them to break 
// - ex1: decorator pattern - instead of modifying the code we create a new class that implements the same interface, we can call the new method without affecting the other code in our app
//                                         - the benefit: we can use the dependency injection at runtime to be able to control when this new class is used 
//                                         - we can use this if our method we want to extend is both public and included in the interface
// - ex2: extension method - C#, Kotlin 
//                                         - allows you to add a method to an existing class without actually having to change that file.
//                                         - provided that you have the namespace for your extension imported you can then use the method in the same way you would do if that method was part of the original class
//                                         - downside: u can switch at runtime when this code is used 


// 3rd
// L = Liskov Substitution Principle = a child class should be able to do everything that a parent class can
// actually the child class can't do all the things a parent could so to fix this:
// we have to create a class A for example
//                                 /          \
//                     parent class     child class
// so this class A can have a parent and a child class that would inherit from that instead


// 4th
// I=Interface Segregation = interfaces provide a contract that your class need to implement

// if we have bulky interfaces then classes are forced to implement methods they might not end up using
// ex: repository pattern - if we use this, we have to write implementation for each of those methods even we wont be using them
// to overcome this: split the methods into different interfaces 
// -> from public interface Interface IRepository<T>{} -> 1 for writing -> public interface IRepositoryWriter<T>{} 
//                                                 -> 1 for reading: IRepositoryReader<T>{}                                                                                                          
//                                                 -> 1 for deleting: IRepositoryRemover<T>{} 

// -> if we have to use all the methods we can always create a main interface that inherits from all the others
// ex: 
// public interface IRepository<T> : 
//                 IRepositoryReader<T>, IRepositoryWriter<T>, IRepositoryRemover<T>
// {
// }
// This way we will implement the methods that we are actually going to use. :D
// Don't need to worry about calling code that wasnt implemented yet


// 5th 
// Dependency Inversion Principle

// Dependency Inversion = High-Level modules shouldn't depend on Low-Level modules.
                    //    They should both depend on an abstraction

// ex: service class and we want so save something in the database
//     we could create an instance of the repository class inside the service class
//     now service is dependent on a lower level component

//  Service
//   ||
//   \/
//  Repository

// To overcome this we create and then we inject an instance of the repository
// into that class via the constructor.
// Now both the high level and low level modules depends on the abstraction which
// in this case is the interface 

// Service ------\
//                IRepository 
// Repository----/

// This rules are here to help us write better code.
// https://www.youtube.com/watch?v=kF7rQmSRlq0&t=192s - Alex Hyett's video of SOLID principles