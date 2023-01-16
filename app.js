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
  res.send("<h1>Welcome Home page!!!</h1>");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit </h1>`);
});

app.get("/r/:subreddit/:comments", (req, res) => {
  const { subreddit, comments } = req.params;
  res.send(`<h1>Browsing the new  ${comments} of ${subreddit} subreddit </h1>`);
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("Nothing found if nothing searched");
  }
  res.send(`<h1>The coco is ${q}</h1>`);
});

app.get("*", (req, res) => {
  res.send(`I don't know this path`);
});

app.listen(8080, () => {
  console.log("Listening on 8080");
});
