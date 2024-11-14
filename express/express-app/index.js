const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req,res)=>{
    res.send('!, the server is running')
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});