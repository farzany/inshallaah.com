/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'merienda': ['Merienda', 'cursive'],
        'merriweather': ['Merriweather', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
