import { Request, Response } from "express";
import { shortUrlService } from "./short-url.service.js";
import { StatusCode } from "../../helpers/status-code.js";

export const getShortUrlByShortCodeController = async (
  req: Request,
  res: Response,
) => {
  const { shortCode } = req.params as { shortCode: string };

  const shortUrl = await shortUrlService.getByShortCode(shortCode);
  return res.status(StatusCode.OK).json({ data: shortUrl });
};

export const getShortUrlStatsByShortCodeController = async (
  req: Request,
  res: Response,
) => {
  const { shortCode } = req.params as { shortCode: string };

  const shortUrl = await shortUrlService.getStatsByShortCode(shortCode);
  return res.status(StatusCode.OK).json({ data: shortUrl });
};

export const createShortUrlController = async (req: Request, res: Response) => {
  const shortUrl = await shortUrlService.create(req.body);
  return res.status(StatusCode.CREATED).json({ data: shortUrl });
};

export const updateShortUrlController = async (req: Request, res: Response) => {
  const { shortCode } = req.params as { shortCode: string };

  const shortUrl = await shortUrlService.update(shortCode, req.body.url);
  return res.status(StatusCode.OK).json({ data: shortUrl });
};

export const deleteShortUrlController = async (req: Request, res: Response) => {
  const { shortCode } = req.params as { shortCode: string };

  await shortUrlService.delete(shortCode);
  return res.status(StatusCode.NO_CONTENT).json();
};
