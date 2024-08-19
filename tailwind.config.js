/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "SLATE-300": "hsl(212, 45%, 89%)",
        "SLATE-500": "hsl(216, 15%, 48%)",
        "SLATE-900": "hsl(218, 44%, 22%)"
      }
    },
  },
  plugins: [],
}