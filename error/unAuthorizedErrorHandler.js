const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./error");

require('http-status-code')
class UnAuthorizedError extends CustomAPIError {
     constructor(message){
         super(message)
         this.statusCode = StatusCodes.UNAUTHORIZED
     }
}

module.exports = UnAuthorizedError