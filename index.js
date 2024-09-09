// template for express
const express = require("express");

const app = express();

app.get("/hi", (req, res) => {
  res.send("Hello World");
});

app.listen(7000, () => {
  console.log("Server is running on http://localhost:7000");
  var age = "10";
});
