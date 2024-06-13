const express = require('express')
const app = express()
const port = 3000
const bodyParser= require("body-parser");

app.use(bodyParser.json())
app.get('/', function(req, res){
  res.send('Hello World!')
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})