/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // Membuat Custom Spacing
      spacing:{
        13: '3.25rem',
      }
    },
  },
  plugins: [],
}

