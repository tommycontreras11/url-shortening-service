"use client"

import { useGetShortUrlStatsByShortCode } from "@/hooks/api/short-url.hook";
import { useParams } from "next/navigation";

export default function ShortUrlStatsPage() {
  const { shortCode } = useParams<{ shortCode: string }>();

  const {
    data: shortUrl,
    isLoading,
    isPending,
    isError
  } = useGetShortUrlStatsByShortCode(shortCode);

  if (isLoading) return <p>Fetching short url...</p>;

  if (isPending) return <p>Fetching short url is in pending...</p>;

  if (isError) {
    return <div>Something went wrong. Please try again.</div>;
  }

  if (!shortUrl) {
    return <div>Short URL not found</div>;
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
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
