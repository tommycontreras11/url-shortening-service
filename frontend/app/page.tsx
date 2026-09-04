"use client"

import { useGetShortUrlByShortCode } from "@/hooks/api/short-url.hook";

export default function Home() {
  const { data: shortUrl, isLoading, isPending, error } = useGetShortUrlByShortCode("dIkE0zNR")

  if(isLoading) return (
    <p>Fetching short url...</p>
  )

  if(isPending) return (
    <p>Fetching short url is in pending...</p>
  )

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      {shortUrl && shortUrl.data.url}
    </div>
  );
}
