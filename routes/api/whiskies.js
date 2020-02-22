const express = require("express");
const router = express.Router();
const Whisky = require("../../models/whisky");

// Get all items
router.get("/", async (req, res) => {
  try {
    const whiskies = await Whisky.find().sort({ date: -1 });
    res.json(whiskies);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create an item
router.post("/", async (req, res) => {
  const { name, age, country, description } = req.body;

  const newWhisky = new Whisky({
    name,
    age,
    country,
    description
  });

  try {
    const whisky = await newWhisky.save();
    res.json(whisky);
  } catch (err) {
    res.status(400).json({ error: "Could not save" });
  }
});

// Delete an item
router.delete("/:id", async (req, res) => {
  try {
    const whisky = await Whisky.findById(req.params.id);
    await whisky.remove();
    res.json({ success: true });
  } catch (err) {
    res.status(404).json({ success: false });
  }
});

module.exports = router;
