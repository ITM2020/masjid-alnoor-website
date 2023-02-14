/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'heading': ['Barlow Condensed', 'Helvetica', 'Arial', 'sans-serif'],
      'body': ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      'title': ['Cinzel Decorative', 'cursive']
    },
    extend: {},    
  },
  plugins: [],
}
