const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("HI THERE, RUNNING FROM AND DOCKER IMAGE");
});

app.listen(8083, () => {
  console.log("LISTENING ON PORT 8083 in box");
});
