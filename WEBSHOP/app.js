const express = require('express')
const app = express()
const cors = require('cors')



app.use(cors())
app.use(express({extended:false}))
app.use(express.json())

app.use('/api/products', require('./controllers/productController'))
app.use('/api/users', require('./controllers/userController'))
app.use('/api/orders', require('./controllers/orderController'))


module.exports = app