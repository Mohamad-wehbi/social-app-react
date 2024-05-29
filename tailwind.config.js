/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors: {
        primary: 'rgb(var(--bg-primary) / <alpha-value>)',
        secondry: 'rgb(var(--bg-secondary) / <alpha-value>)',
        primaryColor: 'rgb(var(--text-primary) / <alpha-value>)',
        secondryColor: 'rgb(var(--text-secondary) / <alpha-value>)',
        main: 'rgb(var(--main) / <alpha-value>)',
        shadow: 'rgb(var(--shadow) / <alpha-value>)',
      },
    },
  },
  plugins: [],
})
