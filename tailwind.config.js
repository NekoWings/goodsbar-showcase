/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { cream: "#FDFBF7", cocoa: "#4A2F15", wood: "#D4A373", ember: "#E07A5F", moss: "#7AA18A", parchment: "#F5F2ED", lilac: "#D9C6FF", sky: "#8BC6EC" },
    fontFamily: { display: ["Nunito", "ui-rounded", "sans-serif"], body: ["Inter", "ui-sans-serif", "sans-serif"] },
    boxShadow: { card: "0 24px 70px rgba(74,47,21,.12)" }
  }},
  plugins: [],
};
