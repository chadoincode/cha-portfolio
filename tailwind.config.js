const { keyframes, scale } = require("framer-motion");

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        fadeZoomIn: 'fadeZoomIn 0.3s ease-out forwards',
        popup: 'popup 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        fadeZoomIn: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        popup: {
          '0%': { opacity: 0, transform: 'scale(0.8)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        }
      },
    },
  },
  plugins: [],
}
