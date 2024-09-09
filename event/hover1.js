const button = document.getElementById('myButton');
const input = document.getElementById('myInput');

button.addEventListener('click', function() {
  alert('Button was clicked!');
});

button.addEventListener('dblclick', function() {
  alert('Button was double-clicked!');
});

button.addEventListener('mouseover', function() {
  button.style.backgroundColor = 'lightblue';
});

button.addEventListener('mouseout', function() {
  button.style.backgroundColor = '';
});

input.addEventListener('keydown', function(event) {
  console.log('Key pressed: ' + event.key);
});
