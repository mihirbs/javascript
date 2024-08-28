// grade.js

function checkgrade() {
    // Get the value from the input field
    const marks = document.getElementById('dayInput').value;
    
    // Convert the input to a number
    const marksNumber = Number(marks);
  
    // Get the result element to display the outcome
    const resultElement = document.getElementById('result');
  
    // Check the grade based on the marks entered
    if (isNaN(marksNumber) || marksNumber < 0 || marksNumber > 100) {
      resultElement.textContent = "Please enter a valid number between 0 and 100.";
    } else if (marksNumber >= 90) {
      resultElement.textContent = "Congratulations! You're in heaven with an A grade!";
    } else if (marksNumber >= 75) {
      resultElement.textContent = "Great job! You're safe with a B grade.";
    } else if (marksNumber >= 50) {
      resultElement.textContent = "Not bad! You're hanging on with a C grade.";
    } else {
      resultElement.textContent = "Oops! You're in hell with a D grade. Better luck next time!";
    }
  }
  