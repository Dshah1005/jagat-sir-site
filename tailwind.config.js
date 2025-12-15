/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E5E7E",     // Wix dark blue
        secondary: "#3A7CA5",   // Wix soft blue
        accent: "#F28C28",      // Wix orange
        background: "#FAF7F2",  // Wix off-white
        textMain: "#1E5E7E",
        textBody: "#5F6F7A",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
