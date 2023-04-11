const router = require('express').Router()
const  {createUser, login } = require('../models/userModels')
const auth = require('../authentication/auth')
// const { verifyToken } = require('../authentication/auth')

router.post('/add', createUser)
router.post('/login', login)


module.exports = router;