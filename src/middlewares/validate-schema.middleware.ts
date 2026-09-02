import { NextFunction, Request, Response } from "express";
import z from "zod";

export const validateSchema =
  (schema: z.ZodType) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    const errors = result.error?.flatten();

    if (!result.success) {
      return res.status(422).json({
        message: "Validation failed",
        errors: {
          form: errors?.formErrors,
          fields: errors?.fieldErrors,
        },
      });
    }

    req.body = result.data;

    next();
  };
