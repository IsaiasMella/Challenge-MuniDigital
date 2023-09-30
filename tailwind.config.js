/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      outline: {
        '1px': '1px solid currentColor',
      },
    },
  },
  plugins: [],
}

