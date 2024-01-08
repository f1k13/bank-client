/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,tsx,jsx,ts}"],
  theme: {
    colors: {
      mainColor: "#131313",
      secondaryColor: "#1B1B1B",
      secondaryAccentColor: "#9E70FF",
      borderMainColor: "#2A2A2A",
      textMainColor: "#989898",
      white: "#fff",
      black: "#000",
      secondaryBlockColor: "#152030",
      blockMainColor: "#1981A3",
    },
    fontSize: {
      "14px": "14px",
      "16px": "16px",
      "18px": "18px",
      "24px": "24px",
      "32px": "32px",
    },
  },
  plugins: [],
};
