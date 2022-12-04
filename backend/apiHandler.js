import nextConnect from "next-connect";
import ErrorHandler from "./utils/errorHandler";

const handelError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  // Handel Mongoose ID error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid ${err.path}`;

    err = new ErrorHandler(message, 400);
  }

  // Handle Mongoose field validation error.
  if (err.name === "ValidationError") {
    const message = Object.values(err?.errors || [])
      .map((errObj) => errObj.message)
      .join(" and ");

    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const handelNoMatch = (req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found.",
  });
};

const getApiHandler = () => {
  const apiHandler = nextConnect({
    onError: handelError,
    onNoMatch: handelNoMatch,
  });
  return apiHandler;
};

export default getApiHandler;
