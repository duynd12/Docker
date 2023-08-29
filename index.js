const express = require("express");
const app = express();

const config = require("./db");
const PORT = 8085;

app.get("/", function (req, res) {
  res.send("Hello world");
});

app.listen(PORT, function () {
  console.log("Your node js server is running on PORT:", PORT);
});
