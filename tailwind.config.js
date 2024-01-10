/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'for-dark-color': '#007FFF',
  'lite-dark-color': '#11151A',
  'lite-blue-color': '#2F81F7',
  'lite-bluissh-body-background-color': '#E6E6FA',
  'yellow-color': '#f5ba13',
  'darkish-blue-backgound': '#0F152B',
  'blue-color-for-button': '#3C46FF',
      }
    },
  },
  plugins: [],
}