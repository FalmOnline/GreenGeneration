/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'gg-green': '#73AB72',
        'gg-dark-green': '#1C513F',
        'gg-dark-grey': '#363636',
        'gg-medium-grey': '#9F9F9F',
        'gg-light-grey': '#9F9B91',
        'gg-text-grey': '#72706B',
        'gg-text-orange': '#E4846E',
        'gg-grey-buttons': '#E6E7E3',
        'gg-bej': '#FFF6E7',
        'gg-bej-dark': '#FAEBD7',
        'gg-danger': '#FF4747',
        'gg-info': '#30F2F2',
        'gg-warning': '#F7D764',
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
};
