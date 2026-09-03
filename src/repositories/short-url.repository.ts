import AppDataSource from "../database/data-source.js";
import { ShortUrlEntity } from "../database/entities/short-url.entity.js";
import { CreateOrUpdateShortUrlInternal } from "../modules/short-url/short-url.schema.js";

const repository = AppDataSource.getRepository(ShortUrlEntity);

export const shortUrlRepository = {
  findByShortCode(shortCode: string) {
    return repository.findOneBy({ shortCode });
  },
  create(payload: CreateOrUpdateShortUrlInternal) {
    const entity = repository.create({
      shortCode: payload.shortCode,
      url: payload.url,
      ...(payload.accessCount && { accessCount: payload.accessCount }),
    });
    return entity.save();
  },
  update(id: number, payload: CreateOrUpdateShortUrlInternal) {
    return repository.update(id, {
      shortCode: payload.shortCode,
      url: payload.url,
      ...(payload.accessCount && { accessCount: payload.accessCount }),
    });
  },
  remove(id: number) {
    return repository.delete(id);
  },
};
