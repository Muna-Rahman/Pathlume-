"use client";

import { useState } from "react";
import { loginWithGoogle } from "@/lib/api/auth.js";
import { Button } from "@/components/ui/Button.js";

export function SocialLoginButton({ callbackPath = "/explore" }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClick = async () => {
    setError("");
    setLoading(true);
    try {
      await loginWithGoogle(callbackPath);
    } catch (err) {
      setError(err.message || "Could not start Google sign-in.");
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        type="button"
        variant="secondary"
        className="w-full"
        loading={loading}
        onClick={handleClick}
      >
        <svg width="16" height="16" viewBox="0 0 18 18" className="shrink-0">
          <path fill="#4285F4" d="M17.6 9.2c0-.6-.1-1.2-.2-1.8H9v3.5h4.8a4.1 4.1 0 01-1.8 2.7v2.2h2.9c1.7-1.6 2.7-3.9 2.7-6.6z" />
          <path fill="#34A853" d="M9 18c2.4 0 4.5-.8 6-2.2l-2.9-2.2c-.8.5-1.9.9-3.1.9-2.4 0-4.4-1.6-5.1-3.8H1v2.3A9 9 0 009 18z" />
          <path fill="#FBBC05" d="M3.9 10.7a5.4 5.4 0 010-3.4V5H1a9 9 0 000 8l2.9-2.3z" />
          <path fill="#EA4335" d="M9 3.6c1.3 0 2.5.5 3.4 1.3L15 2.4A9 9 0 001 5l2.9 2.3C4.6 5.1 6.6 3.6 9 3.6z" />
        </svg>
        Continue with Google
      </Button>
      {error && <p className="mt-2 text-center text-xs text-danger">{error}</p>}
    </div>
  );
}
