"use client";

import { UpdateShortUrlForm } from "@/components/short-url/update-short-url-form";
import { useParams } from "next/navigation";

export default function UpdateShortUrlPage() {
  const { shortCode } = useParams<{ shortCode: string }>();

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
      <div className="w-full max-w-2xl">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Update a Short URL
          </h1>

          <p className="mt-2 text-muted-foreground">
            Turn long URLs into short, shareable links.
          </p>
        </div>

        <UpdateShortUrlForm shortCode={shortCode} />
      </div>
    </main>
  );
}
