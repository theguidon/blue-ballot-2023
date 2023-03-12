/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bb_blue: "#282677",
        bb_blue_darker: "#232166",
        bb_blue_transparent: "rgba(40, 38, 119, 0.5)",
        bb_orange: "#E45635",
        bb_orange_darker: "#c94d2e",
        bb_orange_transparent: "rgba(228, 86, 53, 0.5)",
        bb_yellow: "#FFC857",
        bb_yellow_darker: "#ebb750",
        bb_yellow_transparent: "rgba(255, 200, 87, 0.5)",
        bb_white: "#FCF7F7",
        bb_light_blue: "#3D8BA5",
        bb_gray: "#D0D0D0CC",
        bb_transparent_black: "#000000CC",
      },
      backgroundImage: {
        "hero-bg": "url('./src/assets/images/Hero.png')",
      },
      fontFamily: {
        franklinGothicBook: ["Franklin Gothic Book", "sans-serif"],
        franklinGothicDemi: ["Franklin Gothic Demi", "sans-serif"],
      },
    },
    screens: {
      phone: { max: "320px" },
      tablet: { max: "768px" },
      laptop: { max: "1024px" },
      desktop: { max: "1280px" },
    },
    fontFamily: {
      franklinGothicBook: ["Franklin Gothic Book", "sans-serif"],
      franklinGothicDemi: ["Franklin Gothic Demi", "sans-serif"],
      freightText: ["Freight Text", "sans-serif"],
    },
    plugins: [],
  },
};
