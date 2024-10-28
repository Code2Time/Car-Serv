/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor :{
       'car-gray1' : '#f2f2f2',
       'car-red1' : '#d81324',
       'car-red2' : '#ad0f1d'
      },
      colors:{
        'car-red1' : '#d81324',
        'car-gray1' : '#5e6477',
        'car-blue1' : '#0b2a68',
        'car-blue2' : '#0B2154'

      },
      screens: {
        screens: {
          sm: "490px",

          md: "768px",

          smd: "999px",

          lg: "1024px",

          xl: "1280px",
        },
      }
    },
  },
  plugins: [],
}