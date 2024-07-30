const errorMiddleware = (err, req, res, next) => {
    console.log(err);
  
    const defaultErrors = {
      statusCode: 500,
      message: err.message || err,
    };
  
    // Missing field error
    if (err.name === "ValidationError") {
      defaultErrors.statusCode = 400;
      defaultErrors.message = Object.values(err.errors).map((item) => item.message).join(', ');
    }
  
    // Duplicate field error
    if (err.code && err.code === 11000) {
      defaultErrors.statusCode = 400;
      defaultErrors.message = `${Object.keys(err.keyValue)} field has to be unique`;
    }
  
    if (!res.headersSent) {
      res.status(defaultErrors.statusCode).json({ message: defaultErrors.message });
    } else {
      console.error('Headers already sent');
    }
  };
  
  export default errorMiddleware;
  