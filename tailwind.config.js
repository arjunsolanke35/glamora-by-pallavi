/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FFF8F4',
          dark: '#F5ECE6',
          muted: '#EFE3DC',
        },
        blush: {
          light: '#FAF0F2',
          DEFAULT: '#F4DDE1',
          hover: '#EAC8CE',
        },
        rose: {
          DEFAULT: '#C75D79',
          light: '#DA748E',
          dark: '#AA4861',
        },
        burgundy: {
          DEFAULT: '#801F3D',
          deep: '#5C1129',
          light: '#9E2D4F',
          soft: '#F4E6EB',
        },
        champagne: {
          DEFAULT: '#C8A46A',
          light: '#DEC18C',
          dark: '#A9854D',
          pale: '#F6EEDB',
        },
        chocolate: {
          DEFAULT: '#302322',
          muted: '#5A4644',
          light: '#7F6765',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(128, 31, 61, 0.08), 0 4px 12px rgba(48, 35, 34, 0.04)',
        'luxury-hover': '0 20px 40px -15px rgba(128, 31, 61, 0.16), 0 8px 20px rgba(200, 164, 106, 0.15)',
        'gold-glow': '0 0 25px rgba(200, 164, 106, 0.25)',
        'burgundy-glow': '0 10px 30px rgba(128, 31, 61, 0.3)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
