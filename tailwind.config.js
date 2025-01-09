/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      backgroundDarker: "#0a101e",
      primary: "hsl(var(--primary))",
      primaryMuted: "hsl(var(--primary-muted))",
      secondary: "hsl(var(--secondary))",
      dark: "#21243D",
      light: "#EDF7FA",
      white: "#e2e8f0",
      red: "#FF6464",
    },
    extend: {
      backgroundImage: {
        "radial-gradient-custom":
          "radial-gradient(circle, rgba(169,37,181,1) 0%, rgba(119,22,128,1) 100%)",
      },
    },
  },
  plugins: [],
};
