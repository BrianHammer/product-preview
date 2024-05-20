//Run TW
// 
// npx tailwindcss -i ./input.css -o ./output.css --watch

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      "large": "800px"
    },
    fontWeight: {
      "regular": "500",
      "heavy": "700"
    },
    colors: {
      "dark-cyan": "hsl(158, 36%, 37%)",
      "cream": "hsl(30, 38%, 92%)",

      "very-dark-blue": "hsl(212, 21%, 14%)",
      "dark-greyish-blue": "hsl(228, 12%, 48%)",
      "white": "hsl(0, 0%, 100%)"
    },
    fontFamily: {
      "header": "Fraunces",
      "paragraph": "Montserrat"
    },
    extend: {},
  },
  plugins: [],
}

