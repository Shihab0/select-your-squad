/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2ac922",

          secondary: "#f45faa",

          accent: "#ea777f",

          neutral: "#21273b",

          "base-100": "#fff",

          info: "#a1e9f7",

          success: "#3bceae",

          warning: "#f9c51a",

          error: "#f44355",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
