/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        mobile: "200px",
        xs: "450px",
        sm2: "770px",
        md2: '840px',
        md3: "950px",
        lg: "1075px",
        xl: "1200px",
      "2xl": "1400px",
      },
      colors: {
        customOrange: '#d65f3d'
      }
    },
  },
  plugins: [],
};
