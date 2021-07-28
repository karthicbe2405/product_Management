class ErrorHandler{
    
    handleError(err,req,res,next){
        if( err instanceof APIError){
            
        }
        else{
            res.status(500).json("Sorry Something Went Wrong in Our End , Internal Server Error");
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