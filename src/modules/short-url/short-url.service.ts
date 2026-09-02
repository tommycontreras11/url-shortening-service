import { ShortUrlEntity } from "../../database/entities/short-url.entity.js";
import { shortUrlRepository } from "../../repositories/short-url.repository.js";
import { generateShortCode } from "../../utils/string.js";
import { CreateOrUpdateShortUrl } from "./short-url.schema.js";

export const shortUrlService = {
    async create({ url }: CreateOrUpdateShortUrl) {
        const shortCodeGenerated = generateShortCode()
        
        let foundDifferentShortCode = false
        let foundShortCode: ShortUrlEntity | null = null

        do {
            foundShortCode = await shortUrlRepository.findByShortCode(shortCodeGenerated)
            if(!foundShortCode) foundDifferentShortCode = true
        } while(!foundDifferentShortCode)
        
        return await shortUrlRepository.create({ url, shortCode: shortCodeGenerated })
    }
}