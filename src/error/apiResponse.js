const httpStatusCodes = require("./httpStatusCode");
const BaseError = require("./baseError");

class Api404Error extends BaseError {
    constructor(Message, statusCode = httpStatusCodes.NOT_FOUND, status = "NOT_FOUND") {
        super(Message, statusCode, status);
    }
}
class Api200Success extends BaseError {
    constructor(Message, statusCode = httpStatusCodes.OK, status = "OK") {
        super(Message, statusCode, status);
    }
}
class Api500Error extends BaseError {
    constructor(Message, statusCode = httpStatusCodes.INTERNAL_SERVER, status = "Internal Server.") {
        super(Message, statusCode, status);
    }
}
class Api400Error extends BaseError {
    constructor(Message, statusCode = httpStatusCodes.BAD_REQUEST, status = "Bad Request.") {
        super(Message, statusCode, status);
    }
}
module.exports = { Api404Error, Api200Success, Api400Error, Api500Error };
