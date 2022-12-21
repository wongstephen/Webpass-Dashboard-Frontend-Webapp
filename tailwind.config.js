/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      base: ["Roboto", "sans-serif"],
    },
    extend: {
      boxShadow: {
        neub: "4px 4px 0px black",
      },
      colors: {
        brutalYellow: "#fff503",
        brutalGreen: "#00ff75",
        brutalBlue: "#38dbff",
        brudatlRed: "#ff5d5d",
      },
    },
  },
};
