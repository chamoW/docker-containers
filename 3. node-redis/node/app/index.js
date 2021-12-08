const express = require("express");
const redis = require("redis");
const process = require("process");

const app = express();
const client = redis.createClient({
  host: "redis-server",
  port: 6379,
});

client.set("visits", 0);

app.get("/", (req, res) => {
  client.get("visits", (error, visits) => {
    res.send("Number of visits is: " + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(8084, () => {
  console.log("LISTENING ON PORT 8084 in box for node and redis");
});
