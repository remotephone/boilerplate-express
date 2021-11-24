var express = require('express');
var path = require('path');
var app = express();
require('dotenv').config()

staticPath = __dirname + "/public/";

app.use('/public', express.static(path.join(__dirname, 'public')))


app.get("/", (req, res) => {
    absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
  }
)

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE == "uppecase"){
        res.json({
            message: "Hello json"
          });
      
    } else{
        res.json({
        message: "HELLO JSON"
        });
    }});

  


  
module.exports = app;
