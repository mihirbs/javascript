// index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/getRequest', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.post ('/postRequest', (req,res)=>{
    res.send("Hello this is post method")
});