import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fdf8ee",
          100: "#f8ecd4",
          200: "#f0d5a3",
          300: "#e6b86a",
          400: "#dc9c42",
          500: "#C9A96E",
          600: "#b5882a",
          700: "#956c22",
          800: "#7a5620",
          900: "#64471f",
        },
        navy: {
          50: "#f0f4f9",
          100: "#dae3f0",
          200: "#bccce4",
          300: "#8fadd1",
          400: "#6089b9",
          500: "#4170a4",
          600: "#31588a",
          700: "#284671",
          800: "#1A2B4A",
          900: "#0D1B2A",
          950: "#070e18",
        },
        cream: {
          50: "#FAFAF8",
          100: "#F5F2EC",
          200: "#E8D5B0",
          300: "#D4B896",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A96E 0%, #E8D5B0 50%, #C9A96E 100%)",
        "navy-gradient": "linear-gradient(135deg, #0D1B2A 0%, #1A2B4A 100%)",
        "hero-overlay": "linear-gradient(to bottom, rgba(13,27,42,0.3) 0%, rgba(13,27,42,0.7) 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "slide-up": "slideUp 0.5s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      boxShadow: {
        "gold": "0 4px 24px rgba(201, 169, 110, 0.3)",
        "gold-lg": "0 8px 48px rgba(201, 169, 110, 0.4)",
        "navy": "0 4px 24px rgba(13, 27, 42, 0.3)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.1)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
