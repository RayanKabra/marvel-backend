const express = require("express");
const router = express.Router();
const axios = require("axios");

// Get a list of comics (API documentation)
router.get("/api/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics`,
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

// Get a list of comics containing a specific character (API documentation)
router.get("/api/comics/:characterId", async (req, res) => {
  try {
    const { characterId } = req.params;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}`,
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

// Get all informations of specific comic (API documentation)
router.get("/api/comic/:comicId", async (req, res) => {
  try {
    const { comicId } = req.params;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${comicId}`,
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
