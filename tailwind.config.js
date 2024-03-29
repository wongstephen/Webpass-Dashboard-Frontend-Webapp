/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      base: ["Roboto", "sans-serif"],
      title: ["Urbanist", " sans-serif"],
    },
    extend: {
      boxShadow: {
        neub: "4px 4px 0px black",
      },
      colors: {
        brutalYellow: "#fff503",
        brutalGreen: "#00ff75",
        brutalBlue: "#38dbff",
        brutalRed: "#ff5d5d",
        brutalBeige: "#f5ebd7",
        brutalPurple: "#7385de",
        brutalPeach: "#7385de",
        mainBlue: "#006EF3",
        mainGray: "#EDEEF2",
      },
    },
  },
};
