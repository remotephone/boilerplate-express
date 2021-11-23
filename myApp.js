var express = require('express');
var app = express();


console.log("Hello World")


app.get("/", (req, res) => {
    absolutePath = __dirname + views/index.html;
    res.sendFile(absolutePath);
  }
)

absolutePath = __dirname + relativePath/file.ext

app.get("/test", (req, res) => {
    res.send('Hello Express');
  }
)
  
 module.exports = app;
