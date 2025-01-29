import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#0052FE",
          foreground: "#FFFFFF",
        },
        success: {
          DEFAULT: "#14B079",
          foreground: "#FFFFFF",
        },
        error: {
          DEFAULT: "#DC2626",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#768396",
          foreground: "#0F1629",
        },
        muted: {
          DEFAULT: "#EFF2F5",
          foreground: "#768396",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        'meteor': 'meteor 5s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '100% 100%',
          },
          '100%': {
            backgroundPosition: '0% 0%',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;