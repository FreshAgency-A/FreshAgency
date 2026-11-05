/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ice: {
          400: '#38bdf8',
          500: '#0ea5e9',
          900: '#0c4a6e',
        }
      }
    },
  },
  plugins: [],
}
