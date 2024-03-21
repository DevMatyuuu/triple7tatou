/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 
        "heroBG" : "url('../src/assets/hero-bg.webp')"
      },
      fontFamily: {
        voces: ['Voces', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

