var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())

app.get('/', function(req, res){
  res.json('Hello world')
})

var data = {
  ham: {hp:100, mp:50, strength: 30, special: "ham.net"},
  PJ: {hp:98, mp:99, strength: 0, special: "low-priority"},
}

app.get('/tamagotchi/:name', function(req, res){
  var name = req.params.name
  if (! (name in data) ){
    res.sendStatus(400)
  }
  console.log('get info', name)
  res.json(data[name])
})

app.post('/tamagotchi/hit/:name', function(req, res){
  var damage = req.json.damage
  var name = req.params.name
  if (! (name in data) ){
    res.sendStatus(400)
  }
  data[name].hp = data[name].hp - damage
  res.json(data[name])
})

app.listen(3000)
