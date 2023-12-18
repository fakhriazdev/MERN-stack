/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      title: "28px",
      subtitle: "25px",
    },
    extend: {
      colors: {
        orange: "#f47321",
        red: "#f34646",
        yellow: "#FFF490",
        green: "#66B56E",
        blue: "#5BB0FF",
        darkgray: "#393939",
        gray: "#757575",
        lightgray: "#acacac",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}