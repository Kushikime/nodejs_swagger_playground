const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server is listening on: http://localhost:3000");
});

app.get("/", (req, res) => {
  res.send('Healthy endpoint');
});


app.get("/apartments", (req, res) => {
  res.send('Implement apartments list with offset and limit');
});

app.get("/apartments/:id", (req, res) => {
  res.send('Implement getting apartment by id');
});

app.post("/apartments", (req, res) => {
  res.send('Implement apartment create endpoint');
});

app.put("/apartments/:id", (req, res) => {
  res.send('Implement apartment update by id');
});

app.delete("/apartments/:id", (req, res) => {
  res.send('Implement apartment deletion by id');
});



