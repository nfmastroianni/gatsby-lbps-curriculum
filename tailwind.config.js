/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeDown: {
          '0%': { opacity: 0, transform: 'translate(0, -30px)' },
          '100%': { opacity: 1, transform: 'translate(0,0)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translate(0, 30px)' },
          '100%': { opacity: 1, transform: 'translate(0,0)' },
        },
        fadeRight: {
          '0%': { opacity: 0, transform: 'translate(-30px, 0)' },
          '100%': { opacity: 1, transform: 'translate(0,0)' },
        },
        fadeLeft: {
          '0%': { opacity: 0, transform: 'translate(30px, 0)' },
          '100%': { opacity: 1, transform: 'translate(0,0)' },
        },
      },
      animation: {
        'fade-down': 'fadeDown 1s ease-in-out 1',
        'fade-up': 'fadeUp 1s ease-in-out 1',
        'fade-right': 'fadeRight 1s ease-in-out 1',
        'fade-left': 'fadeLeft 1s ease-in-out 1',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
