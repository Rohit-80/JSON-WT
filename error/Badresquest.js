const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./error");

require('http-status-code')
class BadRequestError extends CustomAPIError {
     constructor(message){
         super(message)
         this.statusCode = StatusCodes.BAD_REQUEST
     }
}

module.exports = BadRequestError