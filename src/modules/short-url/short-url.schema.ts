import z from "zod"

export const createOrUpdateShortUrlSchema = z.object({
    url: z.string({ error: "Please, provide a value" }).trim().min(1)
})

export type CreateOrUpdateShortUrl = z.infer<typeof createOrUpdateShortUrlSchema>

// Internal use
export class CreateOrUpdateShortUrlInternal {
    url: string
    shortCode: string
    accessCount?: number | null
}