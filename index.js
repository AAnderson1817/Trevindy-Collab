var
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  foodRoutes = require('./routes/menuItems.js'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose')

  mongoose.connect('mongodb://localhost/independence', function(err){
    if(err) {
      console.log("Problem connecting to MONGO")}
      else {console.log("Connection established");}
    })

function passInfoToReq(req,res,next){
  req.currentUser= "Trevindy"
  next()
}

//Uses

app.use(passInfoToReq)
app.use(bodyParser.json())
app.use('/', foodRoutes)

app.listen(3000,function(){
  console.log("Server running on 3000");
})
