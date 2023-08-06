const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

// Insert monggodb URL for db connection here
mongoose
  // change to your own db connection url
  // Sample URL below
  .connect("mongodb+srv://test:ROjKpyF85p5CIabX@cluster0.htr7q50.mongodb.net/")
  .then(() => console.log("Connected Successfully"))
  .catch(() => "Failed to connect to db");

app.get("/", (req, res) => {
  res.send("<h2>HELLO WORLD</h2>");
});
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
