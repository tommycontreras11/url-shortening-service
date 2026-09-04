"use client";

import { DeleteShortUrlForm } from "@/components/short-url/delete-short-url-form";

import { useParams } from "next/navigation";

export default function DeleteShortUrlPage() {
  const { shortCode } = useParams<{ shortCode: string }>();

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
      <div className="w-full max-w-2xl">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Delete Short URL
          </h1>

          <p className="mt-2 text-muted-foreground">
            Permanently delete this short URL and its associated data.
          </p>
        </div>

        <DeleteShortUrlForm shortCode={shortCode} />
      </div>
    </main>
  );
}