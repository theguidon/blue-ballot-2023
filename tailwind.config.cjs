/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bb_blue: "#282677",
        bb_orange: "#E45635",
        bb_yellow: "#FFC857",
        bb_white: "#FCF7F7",
        bb_light_blue: "#3D8BA5",
        bb_gray: "#D0D0D0CC",
      },
    },
    screens: {
      'phone': {'max':'320px'},
      'tablet': {'max':'768px'},
      'laptop': {'max':'1024px'},
      'desktop':{'max': '1280px'},
    },
    plugins: [],
  },
};
