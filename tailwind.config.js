/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0d0d14',
          100: '#1a1a2e',
          200: '#16213e',
          300: '#0f0f1a',
        },
        accent: {
          DEFAULT: '#9333ea',
          light: '#a855f7',
          dark: '#7c3aed',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}