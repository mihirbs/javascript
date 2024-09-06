// Select the button and input elements using their IDs
const button = document.getElementById('myButton');
const input = document.getElementById('myInput');

// Add a 'click' event listener to the button
button.addEventListener('click', function() {
  alert('Button was clicked!');
});

// Add a 'dblclick' (double-click) event listener to the button
button.addEventListener('dblclick', function() {
  alert('Button was double-clicked!');
});

// Add a 'mouseover' event listener (triggered when the mouse hovers over the button)
button.addEventListener('mouseover', function() {
  button.style.backgroundColor = 'lightblue'; // Change button color on hover
});

// Add a 'mouseout' event listener (triggered when the mouse leaves the button)
button.addEventListener('mouseout', function() {
  button.style.backgroundColor = ''; // Reset button color when the mouse leaves
});

// Add a 'keydown' event listener to the input field (triggered when a key is pressed)
input.addEventListener('keydown', function(event) {
  console.log('Key pressed: ' + event.key);  // Log the key pressed in the console
});
