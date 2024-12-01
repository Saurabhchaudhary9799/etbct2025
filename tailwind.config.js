import { MdHeight } from "react-icons/md";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "scroll-continuous": "scroll-continuous 10s linear infinite",
      },
      keyframes: {
        moveline: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },

        "scroll-continuous": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        custom: ["Moderustic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
