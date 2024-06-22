const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

//Import des routes
const charactersRoutes = require("./routes/characters");
const comicsRoutes = require("./routes/comics");

//Utilisation des routes
app.use(charactersRoutes);
app.use(comicsRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ error: "Cette route n'existe pas" });
});

app.listen(7200, () => {
  console.log("Server has started");
});
