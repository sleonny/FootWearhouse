const express = require("express");
const router = express.Router();

// Import the Trade model
const Trade = require("../models/trade");

// Route to get all trades
router.get("/", async (req, res) => {
  try {
    const trades = await Trade.find();
    res.status(200).json(trades);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Route to get a single trade by ID
router.get("/:id", async (req, res) => {
  try {
    const trade = await Trade.findById(req.params.id);
    if (!trade) {
      return res.status(404).json({ msg: "Trade not found" });
    }
    res.status(200).json(trade);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Trade not found" });
    }
    res.status(500).send("Server Error");
  }
});

// Route to create a new trade
router.post("/", async (req, res) => {
  try {
    const newTrade = new Trade(req.body);
    const trade = await newTrade.save();
    res.status(201).json(trade);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Route to update a trade by ID
router.put("/:id", async (req, res) => {
  try {
    let trade = await Trade.findById(req.params.id);
    if (!trade) {
      return res.status(404).json({ msg: "Trade not found" });
    }
    trade = await Trade.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(trade);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Trade not found" });
    }
    res.status(500).send("Server Error");
  }
});

// Route to delete a trade by ID
router.delete("/:id", async (req, res) => {
  try {
    const trade = await Trade.findById(req.params.id);
    if (!trade) {
      return res.status(404).json({ msg: "Trade not found" });
    }
    await trade.remove();
    res.status(200).json({ msg: "Trade removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Trade not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
