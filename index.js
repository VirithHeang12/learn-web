// template for express
const express = require("express");

const app = express();

app.get("/hi", (req, res) => {
  res.send("Hello World");
});

app.listen(7000, () => {
  console.log("Server is running on http://localhost:7000");
  for (var i = 0; i < 10; i++) {}
});
