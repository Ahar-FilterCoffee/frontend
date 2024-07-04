/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {},
      themes: {
        light: {
          layout: {},
          colors: {
            // Primary colors
            primary: {
              100: "#fdefe6",
              200: "#f25601",
              300: "#1aa773",
              400: "#dbfbee",
            },
            // Background colors
            background: {
              100: "#ffffff",
              200: "#f1f0f5",
              300: "#d9dadc",
              400: "#666a6d",
            },
            // Text secondary colors
            textSecondary: {
              100: "#16191e",
              200: "#404348",
              300: "#68696c",
              400: "#8e8f91",
            },
          },
        },
        dark: {
          layout: {},
          colors: {
            // Primary colors
            primary: {
              100: "#f15700",
              200: "#53221b",
              300: "#1aa773",
              400: "#1b3027",
            },
            // Background colors
            background: {
              100: "#03060d",
              200: "#1a1d22",
              300: "#03060d",
              400: "#03060d",
            },
            // Text secondary colors
            textSecondary: {
              100: "#03060d",
              200: "#c0c1c3",
              300: "#9a9b9d",
              400: "#75767a",
            },
          },
        },
      },
    }),
  ],
};
