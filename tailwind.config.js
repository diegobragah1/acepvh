/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Lesson HTML lives in the dataset; omitting it hides text on unstyled cards.
    "./data/app_data.json",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#0d9488',
          600: '#0f766e',
          700: '#115e59',
        },
        navy: {
          800: '#111c44',
          900: '#0b132b',
        }
      }
    },
  },
  plugins: [],
}
