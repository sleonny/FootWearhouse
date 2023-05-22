const app = require("express")();
const { Profile } = require("../../models");

// Get all profiles
app.get("/", async (req, res) => {
  try {
    const profiles = await Profile.findAll();
    res.json(profiles);
  } catch (error) {
    console.error("Error retrieving profiles:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get a profile by ID
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const profile = await Profile.findByPk(id);
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    res.json(profile);
  } catch (error) {
    console.error("Error retrieving profile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create a new profile
app.post("/", async (req, res) => {
  const { shoes_for_sale, shoes_for_trade, shoes_for_both, wishlist } =
    req.body;
  try {
    const profile = await Profile.create({
      shoes_for_sale,
      shoes_for_trade,
      shoes_for_both,
      wishlist,
    });
    res.status(201).json(profile);
  } catch (error) {
    console.error("Error creating profile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update a profile by ID
app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { shoes_for_sale, shoes_for_trade, shoes_for_both, wishlist } =
    req.body;
  try {
    const profile = await Profile.findByPk(id);
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    profile.shoes_for_sale = shoes_for_sale;
    profile.shoes_for_trade = shoes_for_trade;
    profile.shoes_for_both = shoes_for_both;
    profile.wishlist = wishlist;
    await profile.save();
    res.json(profile);
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a profile by ID
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const profile = await Profile.findByPk(id);
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    await profile.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.error("Error deleting profile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = app;
