/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#eb1933'
      },
      boxShadow: {
        "custom": "0 2px 4px rgb(28 5 77 / 10%), 0 12px 32px rgb(0 0 0 / 5%)"
      },
      backgroundImage: {
        'hero-pattern': "url('./client/Photos/bg.webp')",
      },
      screens: {
        'xsm': '400px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}
