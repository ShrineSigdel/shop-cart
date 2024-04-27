/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#434343'
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif']
      }
    },
  },
  plugins: [],
};
