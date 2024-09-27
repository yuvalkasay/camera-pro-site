/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        zoom: "zoom 0.6s",
      },
      keyframes: {
        zoom: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },  
      colors: {
        primary: "#FFA500",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        dark: "#111111",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
