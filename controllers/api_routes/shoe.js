const express = require("express");
const router = express.Router();

const Shoe = require("../models/Shoe");

// GET all shoes
router.get("/shoes", async (req, res) => {
  try {
    const shoes = await Shoe.find();
    res.json(shoes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// GET a single shoe by ID
router.get("/shoes/:id", async (req, res) => {
  try {
    const shoe = await Shoe.findById(req.params.id);
    if (!shoe) return res.status(404).json({ msg: "Shoe not found" });
    res.json(shoe);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Shoe not found" });
    }
    res.status(500).send("Server Error");
  }
});

// POST a new shoe
router.post("/shoes", async (req, res) => {
  try {
    const { name, brand, price } = req.body;
    const shoe = new Shoe({
      name,
      brand,
      price,
    });
    await shoe.save();
    res.json(shoe);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// PUT/update a shoe by ID
router.put("/shoes/:id", async (req, res) => {
  try {
    const { name, brand, price } = req.body;
    const shoe = await Shoe.findById(req.params.id);
    if (!shoe) return res.status(404).json({ msg: "Shoe not found" });
    shoe.name = name || shoe.name;
    shoe.brand = brand || shoe.brand;
    shoe.price = price || shoe.price;
    await shoe.save();
    res.json(shoe);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Shoe not found" });
    }
    res.status(500).send("Server Error");
  }
});

// DELETE a shoe by ID
router.delete("/shoes/:id", async (req, res) => {
  try {
    const shoe = await Shoe.findById(req.params.id);
    if (!shoe) return res.status(404).json({ msg: "Shoe not found" });
    await shoe.remove();
    res.json({ msg: "Shoe removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Shoe not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
