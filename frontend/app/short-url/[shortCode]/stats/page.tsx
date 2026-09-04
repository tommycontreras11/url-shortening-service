"use client"

import { ApiError } from "@/exceptions/api-error";
import { useGetShortUrlStatsByShortCode } from "@/hooks/api/short-url.hook";
import { useParams } from "next/navigation";

export default function ShortUrlStatsPage() {
  const { shortCode } = useParams<{ shortCode: string }>();

  const {
    data: shortUrl,
    isLoading,
    isPending,
    isError,
    error,
  } = useGetShortUrlStatsByShortCode(shortCode);

  if (isLoading) return <p>Fetching short url...</p>;

  if (isPending) return <p>Fetching short url is in pending...</p>;

  const apiError = error instanceof ApiError ? error : undefined;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">      
      {isError && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {apiError?.message ?? "Something went wrong. Please try again."}
        </div>
      )}

      {shortUrl && (
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Short URL Stats
          </h1>

          <p className="mt-2 text-muted-foreground">
            url: {shortUrl.data.url}
            <br />
            short code: {shortUrl.data.shortCode}
            <br />
            access count: {shortUrl.data.accessCount}
          </p>
        </div>
      )}
    </div>
  );
}
