/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        canvas: "#f3efe6",
        paper: "#faf8f4",
        ink: "#17211c",
        pine: "#1b4332",
        moss: "#2d6a4f",
        brass: "#8a6840",
        line: "#e3d9cc",
        muted: "#5c6560",
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Outfit"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
