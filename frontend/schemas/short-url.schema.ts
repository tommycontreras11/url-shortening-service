import z from "zod";

export const createOrUpdateShortUrlSchema = z.object({
  url: z.string({ error: "Please, provide a value" }).trim().min(1),
});

export const shortUrlSchema = z.object({
  id: z.number(),
  url: z.string(),
  shortCode: z.string(),
  accessCount: z.number().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const shortUrlResponseSchema = z.object({
  data: shortUrlSchema,
});

export const apiErrorDataSchema = z.object({
  form: z.array(z.string()).optional(),
  fields: z.object({
    url: z.array(z.string()),
  }),
});

export const apiErrorSchema = z.object({
  message: z.string(),
  errors: z.array(apiErrorDataSchema),
});

export type CreateOrUpdateShortUrl = z.infer<
  typeof createOrUpdateShortUrlSchema
>;
export type ShortUrlResponse = z.infer<typeof shortUrlResponseSchema>;
export type ApiError = z.infer<typeof apiErrorSchema>;
