module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,ts}"],
  safelist: [
    { pattern: /dark:bg-.*/ },
    { pattern: /dark:text-.*/ },
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [ animations ],
}
