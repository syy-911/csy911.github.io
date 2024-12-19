/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'bg-black/50',
    'backdrop-blur-sm',
    'bg-black/30',
    'bg-white/10',
  ]
} 