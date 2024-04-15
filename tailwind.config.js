/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       amrimo: "'Arimo', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

