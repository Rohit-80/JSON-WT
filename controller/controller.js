
const BadRequestError = require('../error/Badresquest')

const jwt = require('jsonwebtoken')

const login = async (req,res) =>{
    const {username,password} = req.body
    if(!username || !password){
        console.log('ho')
        throw new BadRequestError('Please Provide Email and Password')
    }
  
    const id = Date.now()
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

     res.status(200).json({msg : 'OK !!! Token is Created',token})

}

const dashborad = async (req,res) =>{
    const luckynumber = Math.floor(Math.random()*100);
    res
    .status(200)
    .json({msg:`Hi ${req.user }` , 
    secret : `your lucky number is ${luckynumber}`})

}

module.exports = {
    login,
    dashborad
}
