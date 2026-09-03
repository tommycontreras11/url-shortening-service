import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exceptions/http-exception.js";
import { StatusCode } from "../helpers/status-code.js";

export const errorHandler = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error instanceof HttpException) {
    return res.status(error.statusCode).json({
      error: {
        message: error.message,
      },
    });
  }

  return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
    error: {
      message: "Internal Server Error",
    },
  });
};
