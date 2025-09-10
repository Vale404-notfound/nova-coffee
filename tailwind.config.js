/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {

        coffee: {
          500: "#331B07", // cta, section darkmode
        },
        beige: {
          50: "#E8DCCF", //cta text
          200: "#DCC8B2", // testi chiari, cta light mode
          footer: "#F5E9DD", // footer light mode
        },
      },
      fontFamily: {
        sans: ["'Albert Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
