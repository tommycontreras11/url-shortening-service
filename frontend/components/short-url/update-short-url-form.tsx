"use client";

import { ApiError } from "@/exceptions/api-error";
import { useUpdateShortUrl } from "@/mutations/api/short-url";
import { useState } from "react";

export function UpdateShortUrlForm({ shortCode }: { shortCode: string }) {
  const [url, setUrl] = useState("");

  const { mutate, isPending, isSuccess, isError, error } = useUpdateShortUrl();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    mutate({ shortCode, url });
  }

  const apiError = error instanceof ApiError ? error : undefined;
  const urlErrors =
    error instanceof ApiError ? error.data?.errors?.fields?.url : undefined;

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl rounded-2xl border bg-white p-6 shadow-sm"
    >
      <div className="mb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Shorten your URL
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Enter a long URL and we'll generate a short link for you.
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor="url" className="text-sm font-medium">
          URL
        </label>

        <input
          id="url"
          type="url"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          placeholder="https://example.com/your-long-url"
          disabled={isPending}
          className="w-full rounded-lg border bg-background px-4 py-3 font-mono text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
        />

        {urlErrors?.map((message: string) => (
          <p key={message} className="text-sm text-red-500">
            {message}
          </p>
        ))}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="mt-4 w-full rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-blue-800"
      >
        {isPending ? "Updating..." : "Update Short URL"}
      </button>

      {isSuccess && (
        <div className="mt-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          Short URL updated successfully!
        </div>
      )}

      {isError && !urlErrors?.length && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {apiError?.message ?? "Something went wrong. Please try again."}
        </div>
      )}
    </form>
  );
}
