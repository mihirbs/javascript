// A class is a blueprint for creating objects with shared properties and methods. Classes are a way to define a type of object that you can create multiple instances of.
{
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log("Hello, my name is " + this.name);
    }
  }

  //creating an instance
  let alice = new Person("Alice", 25);
let bob = new Person("Bob", 30);

//accessing methods and properties

console.log(alice.name);
console.log(bob.age);
alice.greet(); 
bob.greet(); 

}

