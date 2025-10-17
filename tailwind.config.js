/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    { pattern: /border-(blue|amber|emerald|purple|rose)-500/ },
    { pattern: /text-(blue|amber|emerald|purple|rose)-(500|700)/ },
    { pattern: /bg-(blue|amber|emerald|purple|rose)-100/ },
  ],
  theme: {
    extend: {
      animation: {
        'zoomIn': 'zoomIn 0.3s ease-out',
        'fadeIn': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 255, 255, 0.3)',
      },
    },
  },
  plugins: [],
};
