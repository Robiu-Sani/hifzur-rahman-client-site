/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradient: "linear-gradient(45deg, #317170, #628c8b)",
      },
    },
  },
  plugins: [require("daisyui")],
};
