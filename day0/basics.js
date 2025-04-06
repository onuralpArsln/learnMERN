let name = "John";  // String mutable
const age = 25;     // Number immutable
let isStudent = true;  // Boolean

// node both interpreter and repr

function greet() {
    console.log("Hello, world!");
  }
  
  greet(); // Calling the function



if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

for (let i = 0; i < 5; i++) {
    console.log(i);  // Output: 0, 1, 2, 3, 4
  }
  
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  
  let fruits = ["apple", "banana", "orange"];

  console.log(fruits[0]);  // Output: apple
  
  let person = {
    name: "John",
    age: 30,
    greet: function() {
      console.log("Hello, " + this.name);
    }
  };
  
  console.log(person.name);  // Output: John
  person.greet();  // Output: Hello, John
  

  class Person {
    // Constructor function to initialize the object
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method
    greet() {
      console.log("Hello, my name is " + this.name);
    }
  }
  
  // Creating an instance of the class
  let person1 = new Person("Alice", 25);
  person1.greet();  // Output: Hello, my name is Alice
  