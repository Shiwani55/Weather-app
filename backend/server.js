
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const API_KEY = "a5f252bf2f094225947170708252004"; // Keep this secret!

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Error fetching weather" });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
