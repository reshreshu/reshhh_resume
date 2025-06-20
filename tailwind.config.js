/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // Optional: Add custom colors, fonts, shadows, etc.
      colors: {
        brandRed: '#ef4444', // Tailwind red-500 as custom (optional)
      },
      boxShadow: {
        redGlow: '0 0 35px rgba(255, 0, 0, 0.4)',
        redSoft: '0 0 20px rgba(255, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
