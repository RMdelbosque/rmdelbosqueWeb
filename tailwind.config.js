module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,ts}"],
  safelist: [
    { pattern: /dark:bg-.*/ },
    { pattern: /dark:text-.*/ },
  ],
  theme: { extend: {} },
  plugins: [],
}
