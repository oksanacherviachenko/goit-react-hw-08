module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Сканування всіх файлів
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
};
