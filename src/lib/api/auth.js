import { apiRequest, AUTH_BASE_URL } from "./client.js";

/**
 * These two hit Better Auth's own built-in routes directly
 * (mounted at /api/auth/* on the server, not /api/v1/auth/*).
 */
export const registerWithEmail = async ({ name, email, password, role }) => {
  const response = await fetch(`${AUTH_BASE_URL}/api/auth/sign-up/email`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, role }),
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(payload?.message || "Could not create your account.");
  }
  return payload;
};

export const loginWithEmail = async ({ email, password }) => {
  const response = await fetch(`${AUTH_BASE_URL}/api/auth/sign-in/email`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(payload?.message || "Invalid email or password.");
  }
  return payload;
};

/** Redirects the browser through Better Auth's Google OAuth flow. */
export const loginWithGoogle = async (callbackPath = "/explore") => {
  const response = await fetch(`${AUTH_BASE_URL}/api/auth/sign-in/social`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      provider: "google",
      callbackURL: `${window.location.origin}${callbackPath}`,
    }),
  });
  const payload = await response.json().catch(() => null);
  if (payload?.url) {
    window.location.href = payload.url;
    return;
  }
  throw new Error("Could not start Google sign-in.");
};

/** These go through the app-level /api/v1/auth wrappers. */
export const demoLogin = (role) => apiRequest("/auth/demo-login", { method: "POST", body: { role } });

export const logout = () => apiRequest("/auth/logout", { method: "POST" });

export const fetchCurrentUser = async () => {
  try {
    const data = await apiRequest("/auth/me");
    return data?.user || null;
  } catch (err) {
    if (err.statusCode === 401) return null;
    throw err;
  }
};
