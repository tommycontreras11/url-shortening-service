import { ShortUrlEntity } from "../database/entities/short-url.entity.js";

export const formatShortUrlData = (shortUrl: ShortUrlEntity, includeStats = false) => {
    return {
        id: shortUrl.id,
        url: shortUrl.url,
        shortCode: shortUrl.shortCode,
        ...(includeStats && { accessCount: shortUrl.accessCount }),
        createdAt: shortUrl.createdAt,
        updatedAt: shortUrl.updatedAt
    }
}