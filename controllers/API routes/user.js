const express = require("express");
const app = express();

// Define a GET route
app.get("/api/users", (req, res) => {
  // Handle the request
  // Retrieve a list of users from a database, for example
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ];

  // Send a JSON response
  res.json(users);
});

// Define a POST route
app.post("/api/users", (req, res) => {
  // Handle the request
  // Create a new user in a database, for example
  const newUser = {
    id: 3,
    name: req.body.name,
  };

  // Send a JSON response
  res.status(201).json(newUser);
});

// Define a PUT route
app.put("/api/users/:id", (req, res) => {
  // Handle the request
  // Update an existing user in a database, for example
  const userId = req.params.id;
  const updatedUser = {
    id: userId,
    name: req.body.name,
  };

  // Send a JSON response
  res.json(updatedUser);
});

// Define a DELETE route
app.delete("/api/users/:id", (req, res) => {
  // Handle the request
  // Delete an existing user from a database, for example
  const userId = req.params.id;

  // Send a JSON response
  res.json({ message: `User with id ${userId} has been deleted.` });
});
