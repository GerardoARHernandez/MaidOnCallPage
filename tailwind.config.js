/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{jsx,tsx,ts,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], // Agrega Poppins a la configuración
      },
    },
  },
  plugins: [],
}

