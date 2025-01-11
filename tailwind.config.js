/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0052FE',
        'secondary': '#768396',
        'success': '#14B079',
        'danger': '#DC2626'
      },
    },
  },
  plugins: [],
}

