/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand"],
      },
      backgroundImage: {
        "weather-bg":
          "url('http://ayay.co.uk/backgrounds/weather/clouds/blue-sea-horizon.jpg')",
      },
    },
  },
  plugins: [],
};
