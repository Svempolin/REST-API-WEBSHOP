const jwt = require('jsonwebtoken');
require('dotenv').config();


const secretKey = process.env.SECRET_KEY;

exports.generateToken = (user) => {
  return jwt.sign({ _id: user._id }, secretKey, { expiresIn: '8d' })

}

exports.verifyToken = (req, res, next) => {

  try {
    const token = req.headers.authorization.split(' ')[1];
    // req.userData = jwt.verify(token, secretKey);
    req.userId = jwt.verify(token, secretKey)._id;
    next();
  } catch (err) {
    if(err.name === 'TokenExpiredError'){
      return res.status(401).json({
        message: 'token has expired'
      })
    }
   return res.status(401).json({message: 'Access restricted!You need to log in'
  })
  }
}


