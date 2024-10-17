const express = require('express');
const app = express();
const port = 5000;

app.use(express.json()); // Middleware to parse JSON bodies

// Existing list of users
let users = [
    { id: 1, name: 'Mihir Solanki' },
    { id: 2, name: 'Jay Patel' },
    { id: 3, name: 'Vraj Patel' }
];

// GET request to retrieve all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// POST request to add a new user
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age,
        testing: req.body.testing
    };
    users.push(newUser);
    res.status(200).json(newUser);
});

// PUT request to update an existing user
app.put('/users/:id', (req, res) => {
    const { id } = req.params;  // Extract user id from the URL
    const { name, age } = req.body;  // Extract name and age from the request body

    // Find the user with the matching id
    const user = users.find(u => u.id === parseInt(id));

    // If user is not found, return 404 error
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Update the user's data if name or age is provided
    if (name) user.name = name;
    if (age) user.age = age;

    res.status(200).json(user);
});

// DELETE request to delete a user by id
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;  // Extract user id from the URL

    // Find the user with the matching id
    const userIndex = users.findIndex(u => u.id === parseInt(id));

    // If user is not found, return 404 error
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Remove the user from the array
    const deletedUser = users.splice(userIndex, 1); // Splice removes the element from the array

    res.status(200).json({ message: 'User deleted', user: deletedUser });
});

// PATCH request to partially update an existing user
app.patch('/users/:id', (req, res) => {
    const { id } = req.params;  // Extract user id from the URL
    const { name, age } = req.body;  // Extract name and age from the request body

    // Find the user with the matching id
    const user = users.find(u => u.id === parseInt(id));

    // If user is not found, return 404 error
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Update the user's data if name or age is provided
    if (name !== undefined) user.name = name;  // Only update if name is provided
    if (age !== undefined) user.age = age;  // Only update if age is provided

    res.status(200).json(user);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
