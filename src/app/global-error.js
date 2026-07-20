"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error("Pathlume root error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "24px",
          background: "#0A0C16",
          color: "#EDEFF8",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ maxWidth: 420 }}>
          <p style={{ fontFamily: "monospace", fontSize: 13, color: "#F0708A", margin: 0 }}>
            Critical error
          </p>
          <h1 style={{ fontSize: 28, fontWeight: 600, marginTop: 12 }}>
            Pathlume hit an unexpected snag
          </h1>
          <p style={{ fontSize: 14, color: "#8B93AC", marginTop: 12 }}>
            The application failed to load. Reloading usually fixes this - if it keeps happening,
            let us know through the contact page once you're back in.
          </p>
          <button
            onClick={() => reset()}
            style={{
              marginTop: 24,
              padding: "10px 24px",
              borderRadius: 12,
              border: "none",
              background: "linear-gradient(90deg, #F5B860 0%, #4FD8C4 100%)",
              color: "#0A0C16",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
