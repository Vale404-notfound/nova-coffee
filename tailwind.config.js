/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {

        coffee: {
          500: "#331B07", // cta, section darkmode
          400: "#3A1C03" // cta hover
        },
        beige: {
          50: "#E8DCCF", //cta text
          200: "#DCC8B2", // testi chiari, cta light mode
          lighter: "#F5E9DD", // side menu, footer light mode
        },
      },
      fontFamily: {
        sans: ["'Albert Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
