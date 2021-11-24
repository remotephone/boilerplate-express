var express = require('express');
var path = require('path');
var app = express();


staticPath = __dirname + "/camp" + "/public/";

app.use(express.static(staticPath));


app.get("/", (req, res) => {
    absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
  }
)

app.get("/test", (req, res) => {
    res.send('Hello Express');
  }
)

  
 module.exports = app;
