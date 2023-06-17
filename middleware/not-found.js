const { StatusCodes } = require("http-status-codes")


const notfound = async (req,res)=>{
        res.status(StatusCodes.NOT_FOUND).json({msg:"NOT FOUND 404 !!!"})
}

module.exports = notfound