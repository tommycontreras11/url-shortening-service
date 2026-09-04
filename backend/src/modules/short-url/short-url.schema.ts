import z from "zod"

export const createOrUpdateShortUrlSchema = z.object({
    url: z.string({ error: "Please, provide a value" }).trim().min(1)
})

export type CreateOrUpdateShortUrl = z.infer<typeof createOrUpdateShortUrlSchema>

export const validateShortCodeSchema = z.object({
    shortCode: z.string({ error: "Please, provide a value" }).trim().min(1)
})

// Internal use
export class CreateShortUrl {
    url: string
    shortCode?: string
}