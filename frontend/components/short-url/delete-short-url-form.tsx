"use client";

import { ApiError } from "@/exceptions/api-error";
import { useDeleteShortUrl } from "@/mutations/api/short-url";

export function DeleteShortUrlForm({
  shortCode,
}: {
  shortCode: string;
}) {
  const {
    mutate,
    isPending,
    isSuccess,
    isError,
    error,
  } = useDeleteShortUrl();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    mutate({ shortCode });
  }

  const apiError = error instanceof ApiError ? error : undefined;

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl rounded-2xl border bg-white p-6 shadow-sm"
    >
      <div className="mb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Delete Short URL
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Are you sure you want to delete this short URL?
          This action cannot be undone.
        </p>
      </div>

      <div className="rounded-lg bg-muted px-4 py-3 text-sm">
        <span className="font-medium">Short code:</span> {shortCode}
      </div>

      {isSuccess && (
        <div className="mt-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          Short URL deleted successfully!
        </div>
      )}

      {isError && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {apiError?.message ?? "Something went wrong. Please try again."}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending || isSuccess}
        className="mt-4 w-full rounded-lg bg-red-600 px-4 py-3 font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? "Deleting..." : "Delete Short URL"}
      </button>
    </form>
  );
}