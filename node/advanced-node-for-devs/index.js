const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hi there!");
});

app.listen(3000, () => {
  console.log("Server is running at 3000");
});
