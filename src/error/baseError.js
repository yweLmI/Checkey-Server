class BaseError extends Error {
    constructor(Message, statusCode, status) {
        super(Message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.Message = Message;
        this.statusCode = statusCode;
        this.status = status;
        Error.captureStackTrace(this);
    }
}

module.exports = BaseError;
