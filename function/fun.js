// What is a Function?
// A function in JavaScript is like a recipe that tells the computer what to do. It’s a block of code designed to perform a specific task, and you can reuse it whenever you need.

// Why Use Functions?
// Reusability: Write code once and use it many times.
// Organization: Break your code into smaller, manageable parts.
// Avoid Repetition: Instead of writing the same code multiple times, use functions.

// creating and defining a function
{

function sayHello(){
    console.log(" mihir in");
}

sayHello();
}

// example

// Function that greets a user
{
function greetUser(username) {
    console.log("Welcome, " + username + "!");
}

// Function that adds two numbers
function add(a, b) {
    return a + b;
}

// Calling the functions
greetUser("Leo");  
let result = add(10, 5);  
console.log(result);  

}

// function to display a message
{

function showMessage() {
    alert("This is a message!");
}

showMessage();  // This will show an alert with the message.
}


// function to calculate the square of a number
{

function square(number) {
    return number * number;
}

let result = square(4);  
console.log(result);  

}