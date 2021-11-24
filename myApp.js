var express = require('express');
var path = require('path');
var app = express();


staticPath = __dirname + "/public/";

app.use('/camp/public', express.static(path.join(__dirname, 'public')))


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
