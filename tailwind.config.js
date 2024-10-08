/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
  ],
  theme: {
    extend: {
        colors: {
            "main": "#679436",
            "secondary": "#427AA1",
            "light": "#EBF2FA",
            "accent": "#A5BE00",
            /*
            * --avocado: #6d9811ff;
            * --aquamarine: #bcffe2ff;
            * --light-green: #7be288ff;
            * --pigment-green: #2a9e34ff;
            * --forest-green: #319026ff;
            */
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

