/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tulapink: {
          50: '#FDF8F7',
          100: '#F8F3F0',
          200: '#E8D5D1',
          300: '#D7B8B4',
          400: '#C7A29E',
          500: '#B98F8B',
          600: '#9B716D',
          700: '#6E514E',
          800: '#4A3735',
          900: '#2D2524',
        },
        cream: {
          50: '#FFFFFF',
          100: '#FFFDFB',
          200: '#FAF7F2',
          300: '#F4EFEB',
          400: '#ECE4DC',
        },
        brand: {
          dark: '#2D2524',
          warm: '#6E514E',
          rose: '#B98F8B',
          soft: '#D7B8B4',
          blush: '#E8D5D1',
          bg: '#FAF7F4',
          card: '#FFFDFB',
          accent: '#8C4F4B',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      }
    },
  },
  plugins: [],
}
