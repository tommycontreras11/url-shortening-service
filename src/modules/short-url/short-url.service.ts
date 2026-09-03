import { HttpException } from "../../exceptions/http-exception.js";
import { StatusCode } from "../../helpers/status-code.js";
import { formatShortUrlData } from "../../mapper/short-url.mapper.js";
import { shortUrlRepository } from "../../repositories/short-url.repository.js";
import { generateShortCode } from "../../utils/string.js";
import { CreateShortUrl } from "./short-url.schema.js";

const getGeneratedCode = async () => {
  while (true) {
    const shortCode = generateShortCode();

    const existingShortUrl =
      await shortUrlRepository.findByShortCode(shortCode);

    if (!existingShortUrl) {
      return shortCode;
    }
  }
};

export const shortUrlService = {
  async getByShortCode(shortCode: string) {
    const foundShortUrl = await shortUrlRepository.findByShortCode(shortCode);

    if (!foundShortUrl)
      throw new HttpException(
        "URL not found, please provide a valid short code",
        StatusCode.NOT_FOUND,
      )

    foundShortUrl.accessCount += 1;
    await foundShortUrl.save();

    return formatShortUrlData(foundShortUrl);
  },
  async getStatsByShortCode(shortCode: string) {
    const foundShortUrl = await shortUrlRepository.findByShortCode(shortCode);

    if (!foundShortUrl)
      throw new HttpException(
        "URL not found, please provide a valid short code",
        StatusCode.NOT_FOUND,
      )

    return formatShortUrlData(foundShortUrl, true);
  },
  async create({ url }: CreateShortUrl) {
    const shortCodeGenerated = await getGeneratedCode()

    const shortUrlCreated = await shortUrlRepository.create({
      url,
      shortCode: shortCodeGenerated,
    });

    return formatShortUrlData(shortUrlCreated);
  },

  async update(shortCode: string, url: string) {
    console.log(url)
    const foundShortUrl = await shortUrlRepository.findByShortCode(shortCode);

    if (!foundShortUrl)
      throw new HttpException(
        "URL not found, please provide a valid short code",
        StatusCode.NOT_FOUND,
      );
    
    const shortUrl = await shortUrlRepository.update(foundShortUrl, url);

    return formatShortUrlData(shortUrl!);
  },
  async delete(shortCode: string) {
    const foundShortUrl = await shortUrlRepository.findByShortCode(shortCode);

    if (!foundShortUrl)
      throw new HttpException(
        "URL not found, please provide a valid short code",
        StatusCode.NOT_FOUND,
      )

    return await shortUrlRepository.remove(foundShortUrl.id);
  },
};
