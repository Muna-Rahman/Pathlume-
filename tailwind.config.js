/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Semantic names are kept from the original theme so every component keeps working;
        // only the values changed (night sky -> lantern-lit wood, brass and forest green).
        void: {
          DEFAULT: "#1B120D", // dark oak
          soft: "#261A12",
          deep: "#120B07",
        },
        panel: {
          DEFAULT: "#2E2016", // leather / plank
          light: "#3C2A1C",
        },
        lume: {
          DEFAULT: "#E2A547", // brass / gold
          soft: "#F5D08A",
          dim: "#9A6B2C",
        },
        path: {
          DEFAULT: "#8FCB6A", // leaf green
          soft: "#B8E394",
          dim: "#4F8A3A",
        },
        nebula: {
          DEFAULT: "#E58A4B", // copper / ember
          soft: "#F2B287",
          dim: "#A85A25",
        },
        ink: {
          DEFAULT: "#F6E8CC", // parchment
          muted: "#C9B48F",
          faint: "#8F7B58",
        },
        danger: "#E8705E", // ribbon red
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "aurora-gradient":
          "radial-gradient(55% 45% at 15% 10%, rgba(226,165,71,0.20) 0%, transparent 62%), radial-gradient(45% 40% at 90% 12%, rgba(143,203,106,0.12) 0%, transparent 62%), radial-gradient(60% 50% at 50% 105%, rgba(229,138,75,0.16) 0%, transparent 62%), radial-gradient(120% 90% at 50% 50%, transparent 55%, rgba(0,0,0,0.45) 100%)",
        "lume-path": "linear-gradient(180deg, #F5CB78 0%, #E2A547 45%, #B9772A 100%)",
        "path-nebula": "linear-gradient(180deg, #A9DB86 0%, #8FCB6A 45%, #4F8A3A 100%)",
      },
      boxShadow: {
        glow: "inset 0 2px 0 rgba(255,236,190,0.5), 0 4px 0 #5A3A14, 0 10px 18px -6px rgba(0,0,0,0.65)",
        "glow-path": "inset 0 2px 0 rgba(220,255,190,0.4), 0 4px 0 #2F5A22, 0 10px 18px -6px rgba(0,0,0,0.65)",
        panel: "inset 0 0 0 2px rgba(18,11,7,0.7), inset 0 2px 0 rgba(255,222,160,0.12), 0 5px 0 rgba(0,0,0,0.35), 0 18px 36px -16px rgba(0,0,0,0.7)",
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
