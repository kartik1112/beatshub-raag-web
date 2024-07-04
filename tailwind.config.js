/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
        mono: ['Ubuntu Sans Mono','mono-space'],
        tagline: ['Anton SC','sans-serif']
      },
      fontSize: {
        '10xl': '11rem',
        '12xl': '14rem',
        'xxxl': '18rem'
      },
      
      colors: {
        'base-color': '#32004f',
        'white-bg': '#FFFFFF',
        'base-bg': '#220135',
        'base-card': '#32014e',
        'divider': '#2a0141',
      },

    },
  },
  plugins: [],
}

