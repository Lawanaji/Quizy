/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        width: {
          '80': '37rem'
        }
      },
      spacing: {
        '80': '23rem'
      },
      colors: {
        customColor: '#442D7C',
        customText: '#F4F3F6',
        primaryColor: "#442D7C",
        secondaryColor: "#1E0E62",
      },
      fontFamily: {
        'Rubik': ['"Rubik"', "sans-serif"]
      },
      container: {
        center: true,
        screens: {},
      },
    },
  },
  plugins: [],
};
