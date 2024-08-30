// // script.js

// function generateNumbers() {
//     // Get the input value
//     const number = document.getElementById('numberInput').value;

//     // Get the list element where numbers will be displayed
//     const numberList = document.getElementById('numberList');

//     // Clear any previous numbers in the list
//     numberList.innerHTML = '';

//     // Generate numbers from 1 to the entered number using a loop
//     // using for loop
//     for (let i = 1; i <= number; i++) {
//         // Create a new list item (li) for each number
//         const listItem = document.createElement('li');
//         listItem.textContent = i;

//         // Add the list item to the number list
//         numberList.appendChild(listItem);
//     }
//     // at first we do the initialization i = 1 , then we will delare the condition , it will increment or decrement as per the user declaration in the loop  by i++ and i--
//     // it will continue to increment or decrement until the condition is not true
    
// }

// // example of the while loop
// {
//     // Program to find the sum of numbers from 1 to 100 using a while loop
// let sum = 0;
// let i = 1;
// while (i <= 100) {
//     sum += i;
//     i++;
// }
// console.log(`Sum: ${sum}`);

// }
// // example of the do while loop 

// {
//     // Program to print the first 5 even numbers using a do-while loop
// let i = 1;
// let count = 0;
// do {
//     if (i % 2 === 0) {
//         console.log(i);
//         count++;
//     }
//     i++;
// } while (count < 5);

// }
// // example of the for in loop (it is not used that much)

{
    // Program to print the properties and values of an object using a for...in loop
const person = {
    name: "Leo",
    age: 21,
    city: "Mumbai"
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

}

// This line uses template literals, which are enclosed in backticks (`) and allow you to embed variables directly inside a string.
// ${key} is a placeholder inside the template literal. It will be replaced with the current value of the key variable during each loop iteration.
// ${person[key]} accesses the value of the property whose name is stored in key.
// For example, if key is "name", then person[key] is the same as person["name"], which returns "Leo".
// If key is "age", then person[key] returns 21.
// If key is "city", then person[key] returns "Mumbai".
// The console.log() statement outputs the property name and its corresponding value in the format key: value.