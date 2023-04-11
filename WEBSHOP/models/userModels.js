const User = require('../schemas/userSchema')
const bcrypt = require('bcryptjs')
const auth = require('../authentication/auth')
const Order = require('../schemas/orderSchema')

exports.createUser = async (req, res)=> {
    const {firstName, lastName, email, password} = req.body;

    if (!firstName || !lastName|| !password || !email){
    return res.status(400).json({
    message: ' you need to enter all teh suff'
})
    } 
    // eventuellt trye/catch för att fånga upp fel
const salt =  await bcrypt.genSalt(15)
const hash = await bcrypt.hash(password,salt)

 const _user = new User({firstName, lastName, email, passwordHash: hash})
 const  user= await _user.save()


 res.status(201).json(auth.generateToken(user))
}


exports.login = async( req, res) => {
    const {email, password} = req.body;
    if (!email || !password){
        return res.status(400).json({
        message: ' you need to enter all the suff'
    })
        }
    const user =  await User.findOne({email})
    if(!user){
        return res.status(401).json({
            message: "the user not found"
        })
    }

    const result = await bcrypt.compare(password, user.passwordHash)
    if(!result){
        return res.status(401).json({
            message: "the user not found"
        })
    }

    res.status(200).json(auth.generateToken(user))
}

//Get user data and orders
exports.getUserData = async (req, res) => {
    const user = await User.findById(req.params.id);

        if (!user) {
          return res.status(404).json({
            message: 'Could not find this user'
          });

        }
        
       res.status(200).json({
          _id: user._id,
          firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            orders: user.orders
        });
        }

     
        exports.getAllUsers = async (req, res) => {
        const allUsers = await User.find();
        if (!allUsers) {
            return res.status(400).json({ 
                message: 'The users could not be found' });

        } else {
        return res.status(200).json({ allUsers });
        }
    };




   