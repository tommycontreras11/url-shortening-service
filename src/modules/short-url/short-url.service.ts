import { StatusCode } from "../../helpers/status-code.js";
import { formatShortUrlData } from "../../mapper/short-url.mapper.js";
import { shortUrlRepository } from "../../repositories/short-url.repository.js";
import { generateShortCode } from "../../utils/string.js";
import { CreateOrUpdateShortUrl } from "./short-url.schema.js";

const getGeneratedCode = async () => {
  let foundDifferentShortCode = false;
  let foundShortCode: string | undefined = undefined;

  do {
    let shortCodeGenerated = generateShortCode();
    foundShortCode =
      (await shortUrlRepository.findByShortCode(shortCodeGenerated))?.shortCode;

    if (!foundShortCode) {
        foundDifferentShortCode = true
        foundShortCode = shortCodeGenerated
    }
  } while (!foundDifferentShortCode);

  return foundShortCode!
};

export const shortUrlService = {
  async getByShortCode(shortCode: string) {
    const foundShortCode = await shortUrlRepository.findByShortCode(shortCode);

    if (!foundShortCode)
      return Promise.reject({
        message: "URL not found, please provide a valid short code",
        status: StatusCode.NOT_FOUND,
      });

    foundShortCode.accessCount += 1;
    await foundShortCode.save();

    return formatShortUrlData(foundShortCode);
  },
  async getStatsByShortCode(shortCode: string) {
    const foundShortCode = await shortUrlRepository.findByShortCode(shortCode);

    if (!foundShortCode)
      return Promise.reject({
        message: "URL not found, please provide a valid short code",
        status: StatusCode.NOT_FOUND,
      });

    return formatShortUrlData(foundShortCode, true);
  },
  async create({ url }: CreateOrUpdateShortUrl) {
    const shortCodeGenerated = await getGeneratedCode()

    const shortUrlCreated = await shortUrlRepository.create({
      url,
      shortCode: shortCodeGenerated,
    });

    return formatShortUrlData(shortUrlCreated);
  },
  async update(shortCode: string, { url }: CreateOrUpdateShortUrl) {
    const foundShortCode = await shortUrlRepository.findByShortCode(shortCode);

    if (!foundShortCode)
      return Promise.reject({
        message: "URL not found, please provide a valid short code",
        status: StatusCode.NOT_FOUND,
      });
    
    const shortCodeGenerated = await getGeneratedCode()

    await shortUrlRepository.update(foundShortCode.id, { shortCode: shortCodeGenerated, url });
      
    return formatShortUrlData((await shortUrlRepository.findByShortCode(shortCodeGenerated))!);
  },
  async delete(shortCode: string) {
    const foundShortCode = await shortUrlRepository.findByShortCode(shortCode);

    if (!foundShortCode)
      return Promise.reject({
        message: "URL not found, please provide a valid short code",
        status: StatusCode.NOT_FOUND,
      });

    return await shortUrlRepository.remove(foundShortCode.id);
  },
};
