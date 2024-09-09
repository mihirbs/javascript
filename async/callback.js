// function fetchData(callback) {
//     console.log("Fetching data...");
  
//     setTimeout(() => {
//       console.log("Data fetched");
//       callback();  // Call the callback function after data is fetched
//     }, 2000);  // Simulates a 2-second delay
//   }
  
//   function processData() {
//     console.log("Processing data...");
//   }
  
//   fetchData(processData);  // processData will run after data is fetched
  

function displayClock(callback) {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    console.log(`${hours}:${minutes}:${seconds}`);  // Display the time
  
    setTimeout(() => {
      callback(displayClock);  // Call the function again after 1 second
    }, 1000);
  }
  
  displayClock(displayClock);  // Start the clock
  