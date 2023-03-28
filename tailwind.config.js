/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      xs:'400px',
      sm:'640px',
      md:'768px',
      md2:'900px',
      lg:'1024px',
      xl:'1280px',
            },
    extend: {
      colors: {
        mine: '#004AAD',
        mine2:'#1E1E1E'
      }
    },
  },
  plugins: [],
}
