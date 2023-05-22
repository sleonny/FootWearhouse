const app = require("express")();
const { Shoe } = require("../../models");

// Get all shoes
app.get("/", async (req, res) => {
try {
const shoes = await Shoe.findAll();
res.json(shoes);
} catch (error) {
console.error("Error retrieving shoes:", error);
res.status(500).json({ error: "Internal Server Error" });
}
});

// Get a shoe by ID
app.get("/:id", async (req, res) => {
const { id } = req.params;
try {
const shoe = await Shoe.findByPk(id);
if (!shoe) {
return res.status(404).json({ error: "Shoe not found" });
}
res.json(shoe);
} catch (error) {
console.error("Error retrieving shoe:", error);
res.status(500).json({ error: "Internal Server Error" });
}
});

// Create a new shoe
app.post("/", async (req, res) => {
try {
const shoe = await Shoe.create({
name: req.body.name,
description: req.body.description,
size: req.body.size,
price: req.body.price,
UserId: req.body.userId,
});
res.status(201).json(shoe);
} catch (error) {
console.error("Error creating shoe:", error);
res.status(500).json({ error: "Internal Server Error" });
}
});

// Update a shoe by ID
app.put("/:id", async (req, res) => {
const { id } = req.params;
const { name, description, size, price } = req.body;
try {
const shoe = await Shoe.findByPk(id);
if (!shoe) {
return res.status(404).json({ error: "Shoe not found" });
}
shoe.name = name;
shoe.description = description;
shoe.size = size;
shoe.price = price;
await shoe.save();
res.json(shoe);
} catch (error) {
console.error("Error updating shoe:", error);
res.status(500).json({ error: "Internal Server Error" });
}
});

// Delete a shoe by ID
app.delete("/:id", async (req, res) => {
const { id } = req.params;
try {
const shoe = await Shoe.findByPk(id);
if (!shoe) {
return res.status(404).json({ error: "Shoe not found" });
}
await shoe.destroy();
res.sendStatus(204);
} catch (error) {
console.error("Error deleting shoe:", error);
res.status(500).json({ error: "Internal Server Error" });
}
});

module.exports = app;