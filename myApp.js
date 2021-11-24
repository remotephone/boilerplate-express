var express = require('express');
var path = require('path');
var app = express();


staticPath = __dirname + "/public/";

app.use('/public', express.static(path.join(__dirname, 'public')))


app.get("/", (req, res) => {
    absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
  }
)

app.get("/json", (req, res) => {
    res.send('{"message": "Hello json"}');
  }
)


  
module.exports = app;
