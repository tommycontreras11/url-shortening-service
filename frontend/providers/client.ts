import { config } from "@/config";
import { ApiError } from "@/exceptions/api-error";

export async function apiClient<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(`${config.API_URL}/${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "Application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const data = await response.json();

    throw new ApiError(data?.error?.message ?? data?.error ?? "Api request failed", response.status, data);
  }

  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
}
