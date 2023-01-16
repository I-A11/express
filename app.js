const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("we got req");
//   // res.send("hello we got yor request!");
//   res.send("<h1>My webpage</h1>");
// });

// /cats
app.get("/cats", (req, res) => {
  res.send("This is cats router");
});

app.post("/cats", (req, res) => {
  res.send("This is a post request to /cats");
});

// /dogs
app.get("/dogs", (req, res) => {
  res.send("<h2>Woof Woof</h2>");
});

// '/'
app.get("/", (req, res) => {
  res.send("<h1>This is the Home page.</h1>");
});

app.get("*", (req, res) => {
  res.send(`I don't know this path`);
});

app.listen(8080, () => {
  console.log("Listening on 8080");
});
