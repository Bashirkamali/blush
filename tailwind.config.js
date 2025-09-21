/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
      },
      colors: {
        'blush-pink': '#f6d6e5',
        'blush-rose': '#f8bbd9',
      }
    },
  },
  plugins: [],
}
