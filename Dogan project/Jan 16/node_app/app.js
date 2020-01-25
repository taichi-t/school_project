const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/about", (req, res, next) => {
  res.write("<p>this is my about page</p>");
});

app.get("/ok", (req, res) => {
  res.status(200).send("OK");
});

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/views/home.html"), err => {
    console.log(err);
  });
});

app.post("/send-note", (req, res, next) => {
  console.log(req.body);

  fs.readFile(path.join(__dirname, "/data/data.json"), (err, data) => {
    let arr = JSON.parse(data);
    arr.push(req.body);

    fs.writeFile(
      path.join(__dirname, "/data/data.json"),
      JSON.stringify(arr),
      err => {
        console.log(err);
        res.redirect("/read");
      }
    );
  });
});

app.get("/read", (req, res, next) => {
  fs.readFile(path.join(__dirname, "/data/data.json"), (err, data) => {
    res.render("read", { notes: JSON.parse(data) });
  });
});

app.use(express.static("./public"));
app.listen(3001);
