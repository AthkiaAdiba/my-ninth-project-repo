/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: '"Roboto", sans-serif',
        pt_sans: '"PT Sans", sans-serif'
      }
    },
  },
  plugins: [require("daisyui")],
}

