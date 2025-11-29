/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // we will toggle dark-mode by adding `dark` class to <html>
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        text: "var(--text)",
        elements: "var(--elements)",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },

  plugins: [],
};
