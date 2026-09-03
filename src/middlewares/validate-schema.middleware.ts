import { NextFunction, Request, Response } from "express";
import { z } from "zod";

type RequestSource = "body" | "params" | "query";

export const validateSchema = <T extends z.ZodType>(
  schema: T,
  source: RequestSource = "body",
) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req[source]);

    if (!result.success) {
      const errors = z.flattenError(result.error);

      res.status(400).json({
        message: "Validation failed",
        errors: {
          form: errors.formErrors,
          fields: errors.fieldErrors,
        },
      });

      return;
    }

    req[source] = result.data;

    next();
  };
};