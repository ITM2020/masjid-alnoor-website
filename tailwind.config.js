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
      'heading': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      'body': ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
      'title': ['Amiri', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {},    
  },
  plugins: [],
}
