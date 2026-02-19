const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Azure CI CD working successfully");
});

app.get("/health", (req, res) => {
  res.status(200).send("Healthy");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

