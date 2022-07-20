/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand"],
      },
      colors: {
        custombgcolor: "#EAE6FF",
        headerurgentbutton: "#5920BC",
        circle: "#F5F3FF",
      },
    },
  },
  plugins: [],
};
