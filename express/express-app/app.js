const express = require('express'); //importing express
const app = express(); //creating an express app
const port = 3000; // defining the port

// defining a route for the home page
app.get('/', (req,res) => {
    res.send('Hello,Express.js!');
});

// Start the server 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});