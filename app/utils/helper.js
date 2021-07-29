let {ValidationError} = require('express-json-validator-middleware');

class ErrorHandler{
    
    handleError(err,req,res,next){
        
        if( err instanceof ValidationError){
            
            res.status(400).json({"Message" : "Bad Request Invalid Inputs"});

        }
        else{

            res.status(500).json({"Message" : "Sorry Something Went Wrong in Our End , Internal Server Error"});

        }
    }
}

class APIError{

    constructor(code,msg){
        this.code = code;
        this.msg = msg;
    }

    static badRequest(msg){
        return new APIError(400,"Bad Request , Invalid Inputs");
    }

}

exports.ErrorHandler = new ErrorHandler();
exports.APIError = APIError;