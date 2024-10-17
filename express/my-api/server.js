const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a basic route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// Replace with your actual MongoDB URI
const mongoURI = 'mongodb://localhost:27017/mydatabase'; 

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
