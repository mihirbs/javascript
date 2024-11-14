const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB Connection String
const mongoURI = "mongodb://localhost:27017/express";

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define a Mongoose schema for users
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Create a Mongoose model based on the schema
const User = mongoose.model("User", userSchema);

// GET request to fetch all users from MongoDB
app.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from MongoDB
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err });
  }
});

// POST request to add a new user to MongoDB
app.post("/users", async (req, res) => {
  // Check if both name and age are provided
  if (!req.body.name || !req.body.age) {
    return res.status(400).json({ message: "Name and age are required." });
  }

  try {
    const newUser = new User({
      name: req.body.name,
      age: req.body.age,
    });
    await newUser.save(); // Save the user to MongoDB
    res.status(201).json(newUser); // 201: Created
  } catch (err) {
    res.status(500).json({ message: "Error saving user", error: err });
  }
});

// PUT request to update a user in MongoDB
app.put("/users/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name: req.body.name, age: req.body.age },
      { new: true }
    ); // Find and update the user by ID

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Error updating user", error: err });
  }
});

// DELETE request to remove a user by ID from MongoDB
app.delete("/users/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(userId); // Find and delete the user by ID

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user", error: err });
  }
});

// PATCH request to update a user's details in MongoDB
app.patch("/users/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name: req.body.name, age: req.body.age },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Error updating user", error: err });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
