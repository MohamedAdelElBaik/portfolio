/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        backgroundDarker: "#0a101e",
        primary: "hsl(var(--primary))",
        primaryMuted: "hsl(var(--primary-mkkuted))",
        secondary: "hsl(var(--secondary))",
        dark: "#21243D",
        light: "#EDF7FA",
        white: "#fff",
        red: "#FF6464",
        // messages
        messageGreen: "hsl(var(--message-green))",
        messageBeige: "hsl(var(--message-beige))",
        messagePurpleLight: "hsl(var(--message-purple-light))",
        messageText: "hsl(var(--message-text))",
      },
      backgroundImage: {
        "radial-gradient-custom":
          "radial-gradient(circle, rgba(169,37,181,1) 0%, rgba(119,22,128,1) 100%)",
      },
    },
  },
  plugins: [],
};
