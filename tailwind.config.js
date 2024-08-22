/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A56DB',  // Custom primary color
        secondary: '#10B981',  // Custom secondary color
        accent: '#F59E0B',  // Custom accent color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // Custom font family
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
