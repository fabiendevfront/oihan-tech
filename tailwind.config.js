/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "oihan-dark": "#034b4b",
        "oihan-primary": "#069494",
        "oihan-light": "#a4dada",
        "oihan-surface": "#f0f8f8",
      },
      fontFamily: {
        sans: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
