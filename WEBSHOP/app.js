const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')


app.use(express.static(path.join(__dirname)))

app.use(cors())
app.use(express({extended:false}))
app.use(express.json())

app.use('/api/products', require('./controllers/productController'))


module.exports = app