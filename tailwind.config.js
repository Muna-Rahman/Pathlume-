/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#0A0C16",
          soft: "#0F1220",
          deep: "#060710",
        },
        panel: {
          DEFAULT: "#12162C",
          light: "#171C38",
        },
        lume: {
          DEFAULT: "#F5B860",
          soft: "#FFD79A",
          dim: "#B8874A",
        },
        path: {
          DEFAULT: "#4FD8C4",
          soft: "#8CEBDC",
          dim: "#2E9385",
        },
        nebula: {
          DEFAULT: "#B892F5",
          soft: "#D5C2FB",
          dim: "#8562C2",
        },
        ink: {
          DEFAULT: "#EDEFF8",
          muted: "#8B93AC",
          faint: "#5A6180",
        },
        danger: "#F0708A",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "aurora-gradient":
          "radial-gradient(60% 50% at 20% 20%, rgba(245,184,96,0.16) 0%, transparent 60%), radial-gradient(50% 45% at 85% 15%, rgba(79,216,196,0.14) 0%, transparent 60%), radial-gradient(55% 50% at 50% 100%, rgba(184,146,245,0.14) 0%, transparent 60%)",
        "lume-path": "linear-gradient(90deg, #F5B860 0%, #4FD8C4 100%)",
        "path-nebula": "linear-gradient(135deg, #4FD8C4 0%, #B892F5 100%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 8px 40px -12px rgba(245,184,96,0.25)",
        "glow-path": "0 0 0 1px rgba(255,255,255,0.06), 0 8px 40px -12px rgba(79,216,196,0.3)",
        panel: "0 1px 0 rgba(255,255,255,0.06) inset, 0 20px 60px -20px rgba(0,0,0,0.6)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(2%, -3%, 0) scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-400px 0" },
          "100%": { backgroundPosition: "400px 0" },
        },
        "pulse-node": {
          "0%, 100%": { opacity: 0.4, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.4)" },
        },
      },
      animation: {
        drift: "drift 18s ease-in-out infinite",
        "drift-slow": "drift 26s ease-in-out infinite",
        shimmer: "shimmer 1.6s linear infinite",
        "pulse-node": "pulse-node 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
