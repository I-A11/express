const express = require("express");
const app = express();

app.use((req, res) => {
  console.log("we got req");
  //   res.send("hello we got yor request!");
  res.send("<h1>My webpage</h1>");
});

app.listen(8080, () => {
  console.log("Listening on 8080");
});
