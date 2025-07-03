/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
          animation: {
      'fade-in': 'fadeIn 0.3s ease-out',
      'fade-in-right': 'fadeInRight 0.4s ease-out',
    },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      colors: {
        'bg-pink-50': '#FDE8F3',
        'bg-orange-50': '#FFF4E5',
      },
    },
  },
  plugins: [],
};
