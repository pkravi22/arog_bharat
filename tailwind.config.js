module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#0F2C5A',//custom color
      },
      fontFamily: {
        comfortaa: ["Comfortaa", 'sans-serif'], // Add the font family
      },
      animation: {
        scroll: 'scroll-horizontal 12s ease-out infinite',
      },
      keyframes: {
        'scroll-horizontal': {
           '0%': { transform: 'translateX(10%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
