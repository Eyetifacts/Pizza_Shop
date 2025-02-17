const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [require("tailwind-scrollbar")],
  theme: {
    // colors: {
    //   blue: "#1fb6ff",
    //   purple: "#7e5bef",
    //   pink: "#ff49db",
    //   orange: "#ff7849",
    //   green: "#13ce66",
    //   yellow: "#ffc82c",
    //   "gray-dark": "#273444",
    //   gray: "#8492a6",
    //   white: "#FFF",
    //   "gray-light": "#d3dce6",
    //   black: "#000",
    //   red: "#CE2735",
    // },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
        88: "22rem",
        120: "29rem",
        128: "32rem",
        162: "38rem",
        196: "44rem",
        360: "360px",
        650: "650px",
        700: "700px",
        800: "800px",
        1280: "1280px",
        1800: "1800px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
    },
  },
};
