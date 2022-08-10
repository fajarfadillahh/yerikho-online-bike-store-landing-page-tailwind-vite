module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "767px",
      lg: "968px",
      xl: "1120px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#010204",
      grey: "#7b7e88",
      white: "#ffffff",
      yellow: "#f5ff26",
    },
    fontFamily: {
      body: ["Lato", "sans-serif"],
    },
    fontWeight: {
      reguler: 400,
      bold: 700,
      extrabold: 900,
    },
    lineHeight: {
      title: "100%",
      text: "160%",
    },
    transitionDuration: {
      400: "400ms",
    },
    extend: {},
  },
  plugins: [],
};
