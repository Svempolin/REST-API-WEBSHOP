const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config()

const PORT = process.env.PORT || 9999;

app.listen(PORT , () => console.log('server is running' + PORT)) 

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log('conected to db'))