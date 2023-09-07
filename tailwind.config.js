/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      impact: ["Impact"],
      lls: ["'Public Sans'", "sans-serif"],
    },
    extend: {
      colors: {
        dkBlue: "hsl(233, 26%, 24%)",
        limegreen: "hsl(136, 65%, 51%)",
        brightCyan: "hsl(192, 70%, 51%)",
        grayishBlue: "hsl(233, 8%, 62%)",
        lthGrayishBlue: "hsl(220, 16%, 96%)",
        vlthGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [""],
};
