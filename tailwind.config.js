/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-gray': 'rgba(228, 228, 228, 0.60)',
        'gray-e4': '#E4E4E4',
        'black': '#101010',
        'blue': '#0048D6'
      },
      screens: {
        xs: '320px',
        sm: '400px',
        md: '768px',
        lg: '1200px'
      }
    },
  },
  plugins: [],
}

