const jwt = require('jsonwebtoken')
const BadRequestError = require('../error/Badresquest')
const CustomAPIError = require('../error/error')

const authMiddleware = async (req,res,next) =>{

    const auth = req.headers.authorization

    if(!auth || !auth.startsWith('Bearer ')) {
        throw new BadRequestError('UnAuthorized')
    }

    try {
        const token = auth.split(' ')[1]
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        const {id,username} = decode
        req.user = username    
        next()
    } catch (error) {
       throw new BadRequestError('Auth Error')
    }

    
}

module.exports = authMiddleware