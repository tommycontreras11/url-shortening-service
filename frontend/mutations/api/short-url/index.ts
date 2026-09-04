import {
  createShortUrl,
  deleteShortUrl,
  updateShortUrl,
} from "@/providers/http/short-url";
import { useMutation } from "@tanstack/react-query";

export function useCreateShortUrl() {
  return useMutation({
    mutationFn: createShortUrl,
  });
}

export function useUpdateShortUrl() {
  return useMutation({
    mutationFn: ({ shortCode, url }: { shortCode: string; url: string }) =>
      updateShortUrl(shortCode, url),
  });
}

export function useDeleteShortUrl() {
  return useMutation({
    mutationFn: ({ shortCode }: { shortCode: string }) =>
      deleteShortUrl(shortCode),
  });
}
