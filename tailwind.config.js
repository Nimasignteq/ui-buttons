/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-button": {
          default: "#4D3DF7",
          hover: "#1909D3",
          active: "#110689",
          disabled: "#D2CEFD",
        },
        "secondary-button": {
          default: "#FFFFFF",
          hover: "#F2F2F2",
          active: "#E5E5E5",
          disabled: "#F2F2F2",
        },
        "error-button": {
          default: "#FF0000",
          hover: "#CC0000",
          active: "#990000",
          disabled: "#FF9999",
        },
      },
    },
  },
  plugins: [],
};