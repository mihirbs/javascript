// // import express
// const express = require('express');

// // create an express app

// const app = express

// // define a route  for the home page   

// app.get('/', (req,res) => {
//     res.send('Hello,World!'); // it will send the response to the client

// });

// // define another route for about 

// app.get('/about', (req, res) =>{
//     res.send('this is about page');
// } );

// // definig a post route

// app.post('/greet',(req,res) => {
//     const name = req.body.name; 
//     res.send('Hello, ${name}!');
// });

// // starting the srever

// app.listen(3000, () => {
//     console.log("server is running on http://localhost:3000");
// });

const express = require('express'); // Import express
const app = express();              // Create an instance of express

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
