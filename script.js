const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get('/', function (req, res) {
  res.render('index')
})
app.get('/contact', function (req, res) {
  res.render('contact')
})
app.get('/profile/:username', function (req, res) {
  res.send(`profile : - Bruce wayne from gotham and ${req.params.username}`)
})

app.listen(3000)