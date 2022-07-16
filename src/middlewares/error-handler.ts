import { NextFunction, Request, Response } from 'express';
import { AppError } from '../shared/errors/AppError';

function errorHandler(
  error: Error,
  _: Request,
  response: Response,
  __: NextFunction
) {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal Server Error - ${error.message}`,
  });
}

export { errorHandler };
