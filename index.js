var express = require('express')

var app = express()

app.get('/', function(req, res){
  res.json('Hello world')
})

var data = {
  ham: {hp:100, mp:50, strength: 30, special: "ham.net"},
  PJ: {hp:98, mp:99, strength: 0, special: "low-priority"},
}

app.get('/tamagotchi/:name', function(req,res){
  var name = req.params.name
  console.log(name)
  res.json(data[name])
})

app.listen(3000)
