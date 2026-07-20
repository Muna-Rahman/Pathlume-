export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
export const AUTH_BASE_URL = process.env.NEXT_PUBLIC_AUTH_URL || "http://localhost:5000";

/**
 * Thin wrapper around fetch() shared by every API module:
 *  - always sends cookies (Better Auth session)
 *  - always sends/expects JSON
 *  - throws a normalized ApiClientError with the server's message/details
 */
export class ApiClientError extends Error {
  constructor(message, statusCode, details) {
    super(message);
    this.name = "ApiClientError";
    this.statusCode = statusCode;
    this.details = details;
  }
}

export const apiRequest = async (path, { method = "GET", body, params } = {}) => {
  const url = new URL(`${API_BASE_URL}${path}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, value);
      }
    });
  }

  const response = await fetch(url.toString(), {
    method,
    credentials: "include",
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });

  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    throw new ApiClientError(
      payload?.message || "Something went wrong. Please try again.",
      response.status,
      payload?.details
    );
  }

  return payload?.data;
};
