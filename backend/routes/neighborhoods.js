const express = require('express');
const router = express.Router();
const Neighborhood = require('../models/Neighborhood');

// ✅ POST: Match scoring - must come before '/:id'
router.post('/match', async (req, res) => {
  try {
    const prefs = req.body;
    console.log("📩 Received user preferences:", prefs);

    const neighborhoods = await Neighborhood.find();
    console.log("📋 Total neighborhoods in DB:", neighborhoods.length);

    const results = neighborhoods.map(n => {
      let total = 0;
      let max = 0;

      for (let key in prefs) {
        if (n[key] !== undefined) {
          total += prefs[key] * n[key];
          max += prefs[key] * 5;
        }
      }

      const matchPercent = Math.round((total / max) * 100);
      return { ...n._doc, matchPercent };
    }).sort((a, b) => b.matchPercent - a.matchPercent);

    res.json(results);
  } catch (err) {
    console.error("❌ Error in /match:", err);
    res.status(500).send("Server error");
  }
});

// ✅ GET: All neighborhoods
router.get('/', async (req, res) => {
  try {
    const neighborhoods = await Neighborhood.find();
    console.log('📦 Fetched from DB:', neighborhoods.length);
    res.json(neighborhoods);
  } catch (err) {
    console.error('❌ Error fetching neighborhoods:', err);
    res.status(500).send('Server error');
  }
});

// ✅ GET: Single neighborhood by ID
router.get('/:id', async (req, res) => {
  try {
    const neighborhood = await Neighborhood.findOne({ id: req.params.id });
    if (!neighborhood) {
      return res.status(404).send("Neighborhood not found");
    }
    res.json(neighborhood);
  } catch (err) {
    console.error('❌ Error fetching single neighborhood:', err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
