/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: '#472913',
        cream: '#F5F5DC',
      },
    },
  },
  plugins: [],
}