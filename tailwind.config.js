/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /^bg-(amber|emerald|indigo|purple|rose|slate|teal)-(50|100|200|400|500|600|700|800|900|950)(\/(60|70|80|90))?$/,
    },
    'bg-white',
    'bg-black',
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
