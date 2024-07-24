const catchAsyncErrors = (asyncFunction) => {
  return (req, res, next) => {
    Promise.resolve(asyncFunction(req, res, next)).catch((error) => {
      console.error("Log the error is: ", error);
      next(error);
    });
  };
};

export default catchAsyncErrors;
