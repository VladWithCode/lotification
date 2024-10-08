/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
  ],
  theme: {
    extend: {
        colors: {
            "main": "#798645",
            "secondary": "#FEFAE0",
            "light": "#F2EED7",
            "accent": "#626F47",
        },
        fontFamily: {
            "main": "'Plus Jakarta Sans', sans-serif",
            "secondary": "'Playfair Display', serif",
        },
        screens: {
            "xs": "425px",
        }
    },
  },
  plugins: [],
}

