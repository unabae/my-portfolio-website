/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Manrope"']
      },
      screens: {
        'xs': '320px',
      },
      colors: {
        'customGray': "#8B8B8B",
        'customBgGray': "#414141"
      }
    },
  },
  plugins: [],
}

