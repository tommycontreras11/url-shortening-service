import { apiClient } from "@/providers/client";
import { ShortUrlResponse, shortUrlResponseSchema } from "@/schemas/short-url.schema";

export const getShortUrlByShortCode = async (
  shortCode: string,
): Promise<ShortUrlResponse> => {
  const shortUrls = await apiClient(`shorten/${shortCode}`);
  return shortUrlResponseSchema.parse(shortUrls);
};

export const getShortUrlStatsByShortCode = async (
  shortCode: string,
): Promise<ShortUrlResponse> => {
  const shortUrl = await apiClient(`shorten/${shortCode}/stats`);
  return shortUrlResponseSchema.parse(shortUrl);
};

export const createShortUrl = async (
  url: string,
): Promise<ShortUrlResponse> => {
  const shortUrl = await apiClient("shorten", {
    method: "POST",
    body: JSON.stringify({ url }),
  });

  return shortUrlResponseSchema.parse(shortUrl);
};

export const updateShortUrl = async (
  shortCode: string,
  url: string,
): Promise<ShortUrlResponse> => {
  const shortUrl = await apiClient(`shorten/${shortCode}`, {
    method: "PUT",
    body: JSON.stringify({ url }),
  });

  return shortUrlResponseSchema.parse(shortUrl);
};

export const deleteShortUrl = async (shortCode: string): Promise<void> => {
  await apiClient(`shorten/${shortCode}`, {
    method: "DELETE",
  });
};
