/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gibson-girl': ['GibsonGirlJF Regular', 'sans'], 
        'roboto':['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

