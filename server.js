const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, './public')))

app.listen(PORT, function(req, res) {
  console.log(`Listening on ${PORT}`)
})