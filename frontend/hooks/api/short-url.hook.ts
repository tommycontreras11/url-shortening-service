import {
  getShortUrlByShortCode,
  getShortUrlStatsByShortCode,
} from "@/providers/http/short-url";
import { useQuery } from "@tanstack/react-query";

export function useGetShortUrlByShortCode(shortCode: string) {
  return useQuery({
    queryKey: ["short-url", shortCode],
    queryFn: () => getShortUrlByShortCode(shortCode),
    retry: 1,
    enabled: !!shortCode,
  });
}

export function useGetShortUrlStatsByShortCode(shortCode: string) {
  return useQuery({
    queryKey: ["short-url", shortCode, "stats"],
    queryFn: () => getShortUrlStatsByShortCode(shortCode),
    retry: 1,
    enabled: !!shortCode,
  });
}
