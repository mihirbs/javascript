// script.js

function generateNumbers() {
    // Get the input value
    const number = document.getElementById('numberInput').value;

    // Get the list element where numbers will be displayed
    const numberList = document.getElementById('numberList');

    // Clear any previous numbers in the list
    numberList.innerHTML = '';

    // Generate numbers from 1 to the entered number using a loop
    // using for loop
    for (let i = 1; i <= number; i++) {
        // Create a new list item (li) for each number
        const listItem = document.createElement('li');
        listItem.textContent = i;

        // Add the list item to the number list
        numberList.appendChild(listItem);
    }
    // at first we do the initialization i = 1 , then we will delare the condition , it will increment or decrement as per the user declaration in the loop  by i++ and i--
    // it will continue to increment or decrement until the condition is not true
    
}
