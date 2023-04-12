const router = require('express').Router()
const  {createUser, login } = require('../models/userModels')



router.post('/add', createUser)
router.post('/login', login)


module.exports = router;