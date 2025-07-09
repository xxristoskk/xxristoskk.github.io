/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a1a2e',
        'secondary': '#16213e',
        'accent': '#0f3460',
        'text': '#e2e8f0',
      },
      animation: {
        'text-slide': 'text-slide 0.5s ease-out',
      },
      keyframes: {
        'text-slide': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 