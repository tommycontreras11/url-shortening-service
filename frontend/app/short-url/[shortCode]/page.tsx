"use client";

import { useGetShortUrlByShortCode } from "@/hooks/api/short-url.hook";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function ShortUrlPage() {
  const { shortCode } = useParams<{ shortCode: string }>();

  const {
    data: shortUrl,
    isLoading,
    isError,
  } = useGetShortUrlByShortCode(shortCode);

  useEffect(() => {
    if (shortUrl?.data.url) {
      window.location.href = shortUrl.data.url;
    }
  }, [shortUrl]);

  if (isLoading) {
    return <p>Redirecting...</p>;
  }

  if (isError) {
    return <p>Short URL not found.</p>;
  }

  return null;
}