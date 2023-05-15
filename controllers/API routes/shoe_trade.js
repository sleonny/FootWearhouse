const express = require("express");
const router = express.Router();

const { ShoeTrade } = require("../models");

// Get all shoe trades
router.get("/", async (req, res) => {
  try {
    const shoeTrades = await ShoeTrade.findAll();
    res.json(shoeTrades);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Get a single shoe trade by ID
router.get("/:id", async (req, res) => {
  try {
    const shoeTrade = await ShoeTrade.findByPk(req.params.id);
    if (!shoeTrade) {
      return res.status(404).send("Shoe trade not found");
    }
    res.json(shoeTrade);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Create a new shoe trade
router.post("/", async (req, res) => {
  try {
    const { tradeId, shoeId } = req.body;
    const newShoeTrade = await ShoeTrade.create({ tradeId, shoeId });
    res.json(newShoeTrade);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Update an existing shoe trade by ID
router.put("/:id", async (req, res) => {
  try {
    const { tradeId, shoeId } = req.body;
    const shoeTrade = await ShoeTrade.findByPk(req.params.id);
    if (!shoeTrade) {
      return res.status(404).send("Shoe trade not found");
    }
    shoeTrade.tradeId = tradeId;
    shoeTrade.shoeId = shoeId;
    await shoeTrade.save();
    res.json(shoeTrade);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Delete a shoe trade by ID
router.delete("/:id", async (req, res) => {
  try {
    const shoeTrade = await ShoeTrade.findByPk(req.params.id);
    if (!shoeTrade) {
      return res.status(404).send("Shoe trade not found");
    }
    await shoeTrade.destroy();
    res.json({ message: "Shoe trade deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
