// server.js - the SabziCart price API (Node.js + Express)
const express = require("express");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;

const prices = { tomato: 180, onion: 120, potato: 90, spinach: 60 };

app.get("/", (req, res) => {
  res.send("SabziCart app deployed via Docker\n");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", server: os.hostname(), node: process.version });
});

app.get("/api/prices", (req, res) => {
  res.json({ currency: "PKR per kg", prices: prices });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`SabziCart API listening on 0.0.0.0:${PORT}`);
});
