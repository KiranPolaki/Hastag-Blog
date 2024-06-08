/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "logo-cursive": ["Cedarville Cursive", "cursive"],
        "title-sans": ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
