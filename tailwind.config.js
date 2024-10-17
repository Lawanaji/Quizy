/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#442D7C",
        secondaryColor: "#1E0E62",
      },
      container: {
        center: true,
        screens: {},
      },
    },
  },
  plugins: [],
};
