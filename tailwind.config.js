/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        monumentExtended: ['monumentExtended', 'sans-serif'],
        cartographCF: ['cartographCF', 'sans-serif'],
        rothefight: ['rothefight', 'sans-serif'],
        starlightRune: ['starlightRune', 'sans-serif'],
      },
      colors: {
        primary: '#171717',
        secondary: '#1b1b1b',
        accent: '#212121',
      },
      spacing: {
        90: '22.5rem',
        300: '75rem',
        70: '17.5rem',
        50: '12.5rem',
        35: '8.75rem',
        25: '6.25rem',
      },
      fontSize: {
        '9xl': '8rem',
      },
    },
  },
  plugins: [],
};
