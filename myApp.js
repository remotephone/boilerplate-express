var express = require('express');
var path = require('path');
var app = express();



app.use(express.static(__dirname));


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
