/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

const linkHeadingStyles = {
  color: colors.gray[100],
  borderBottomColor: "transparent",
  "&:hover": {
    color: `${colors.gray[900]}`,
  },
};

module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        dbrownsoftware: {
          50: "#f5f3f0",
          100: "#ebe6e1",
          200: "#cfc2b8",
          300: "#b39f92",
          400: "#785d53",
          500: "#3e2723",
          600: "#38201c",
          700: "#2e1713",
          800: "#240f0c",
          900: "#1c0907",
          950: "#120403",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            pre: {
              background: "rgba(205, 200, 255, 0.05)",
            },
            "h2 a": linkHeadingStyles,
            "h3 a": linkHeadingStyles,
            "h4 a": linkHeadingStyles,
            "h5 a": linkHeadingStyles,
            "h6 a": linkHeadingStyles,
            blockquote: {
              fontSize: "90%",
              color: colors.zinc[500],
              borderLeftColor: colors.zinc[700],
              "p::before": { display: "none" },
              "p::after": { display: "none" },
            },
          },
          code: {
            "&::before": { content: `"" !important` },
            "&::after": { content: `"" !important` },
            fontWeight: "normal",
          },
          "[data-rehype-pretty-code-fragment]:nth-of-type(2) pre": {
            "[data-line]::before": {
              content: "counter(line)",
              counterIncrement: "line",
              display: "inline-block",
              width: "1rem",
              marginRight: "1rem",
              textAlign: "right",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class", // https://tailwindcss.com/docs/dark-mode
};
