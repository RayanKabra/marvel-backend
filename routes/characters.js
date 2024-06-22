const express = require("express");
const router = express.Router();
const axios = require("axios");

// Get a list of characters (API documentation)
router.get("/api/characters", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters`,
      {
        params: {
          apiKey: process.env.MARVEL_API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get the infos of a specific character (API documentation)
router.get("/api/character/:characterId", async (req, res) => {
  try {
    const { characterId } = req.params;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}`,
      {
        params: {
          apiKey: process.env.MARVEL_API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
