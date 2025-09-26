/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pottery': {
          'cream': '#F5E6D3',
          'terracotta': '#C65D00',
          'clay': '#8B4513',
          'sand': '#D2B48C',
          'charcoal': '#333333',
        }
      },
      fontFamily: {
        'patron': ['Patron', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}