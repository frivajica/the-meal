/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.ts", "./App.tsx", "./**/*.tsx", "./**/*.ts"],
  theme: {
    extend: {
      colors: {
        yellow: "#E6DB32",
        green: "#85DA8A",
        white: "#FFFFFF",
        black: "#231F20",
        light_Gray: "#F7F8F8",
        dark_Blue: "#2A72C3",
        light_Blue: "#65ACF0",
        dark_Green: "#53CA5B",
        danger_Red: "#D92D20",
        soft_Red: "#d86464",
        warning_Orange: "#F79009",
        alert_Yellow: "#FEC84B",
        icon_Gray: "#636363",
        input_Gray: "#AABBC6",
        btn_shadow: "#1D1D1D",
        icon_notification: "#04004F",
      },
    },
  },
  plugins: [],
};
