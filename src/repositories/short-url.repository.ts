import AppDataSource from "../database/data-source.js";
import { ShortUrlEntity } from "../database/entities/short-url.entity.js";
import { CreateShortUrl, UpdateShortUrl } from "../modules/short-url/short-url.schema.js";

const repository = AppDataSource.getRepository(ShortUrlEntity);

export const shortUrlRepository = {
  findByShortCode(shortCode: string) {
    return repository.findOneBy({ shortCode });
  },
  create(payload: CreateShortUrl) {
    const entity = repository.create({
      shortCode: payload.shortCode,
      url: payload.url
    });
    return entity.save();
  },
  update(entity: ShortUrlEntity, payload: UpdateShortUrl) {
    entity.url = payload.url

    return entity.save()
  },
  remove(id: number) {
    return repository.delete(id);
  },
};
