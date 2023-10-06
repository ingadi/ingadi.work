/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  // safelist: [""],
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#F2F8F8",
          100: "#E6F0F1",
          200: "#C0DADB",
          300: "#99C3C6",
          400: "#4D979B",
          500: "#016A70",
          600: "#015F65",
          700: "#014043",
          800: "#003032",
          900: "#002022",
        },
        yellow: {
          50: "#FFFFFD",
          100: "#FFFFFC",
          200: "#FFFFF7",
          300: "#FFFFF1",
          400: "#FFFFE7",
          500: "#FFFFDD",
          600: "#E6E6C7",
          700: "#999985",
          800: "#737363",
          900: "#4D4D42",
        },
        green: {
          50: "#FDFDF5",
          100: "#FBFCEB",
          200: "#F4F7CC",
          300: "#EDF2AD",
          400: "#E0E870",
          500: "#D2DE32",
          600: "#BDC82D",
          700: "#7E851E",
          800: "#5F6417",
          900: "#3F430F",
        },
        sage: {
          50: "#FAFCF8",
          100: "#F6F9F2",
          200: "#E8F1DE",
          300: "#DAE8C9",
          400: "#BED6A1",
          500: "#A2C579",
          600: "#92B16D",
          700: "#617649",
          800: "#495936",
          900: "#313B24",
        },
      },
      screens: {
        "hover-hover": { raw: "(hover: hover) and (pointer: fine)" },
        "hover-none": { raw: "(hover: none) and (pointer: coarse)" },
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      animation: {
        shimmer: "shimmer 1s ease-in-out infinite",
      },
      backgroundSize: {
        "400%": "400% 400%",
      },
    },
    fontFamily: {
      brand: "Cairo Play, sans-serif",
      headline: "Amaranth, sans-serif",
      body: "Open Sans, sans-serif",
    },
  },
};

// 0%,
// 100% {
//   background-position: 0% 50%;
// }
// 50% {
//   background-position: 100% 50%;
// }
