const express = require("express");

const app = express();

app.get("/", (req, res) => {

  res.sendFile(__dirname + '/index.html')

});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + '/about.html')
});

app.get("/profile/:num", (req, res) => {
  console.log(req.params);

  res.send("profile id is " + req.params.num);
});

app.listen(3000);
