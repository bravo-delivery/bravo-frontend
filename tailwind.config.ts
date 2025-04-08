import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./node_modules/@heroui/theme/dist/components/(button|link|navbar|slider|tabs|popover|ripple|spinner).js",
  ],
  theme: {
    extend: {
      screens: { xs: "520px" },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        revival: ["var(--font-revival)"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "30px",
          xl: "70px",
        },
      },

      fontSize: {
        "6med": ["6px", { fontWeight: "500" }],
        "8reg": ["8px", { fontWeight: "400" }],
        "8semi": ["8px", { fontWeight: "600" }],
        "8med": ["8px", { fontWeight: "500" }],
        "10reg": ["10px", { fontWeight: "400" }],
        "10med": ["10px", { fontWeight: "500" }],
        "11med": ["11px", { fontWeight: "500" }],
        "12light": ["12px", { fontWeight: "300" }],
        "12reg": ["12px", { fontWeight: "400" }],
        "12med": ["12px", { fontWeight: "500" }],
        "12semi": ["12px", { fontWeight: "600" }],
        "12bold": ["12px", { fontWeight: "700" }],
        "14light": ["14px", { fontWeight: "300" }],
        "14reg": ["14px", { fontWeight: "400" }],
        "14med": ["14px", { fontWeight: "500" }],
        "14semi": ["14px", { fontWeight: "600" }],
        "14bold": ["14px", { fontWeight: "700" }],
        "16light": ["16px", { fontWeight: "300" }],
        "16reg": ["16px", { fontWeight: "400" }],
        "16med": ["16px", { fontWeight: "500" }],
        "16semi": ["16px", { fontWeight: "600" }],
        "18reg": ["18px", { fontWeight: "400" }],
        "18med": ["18px", { fontWeight: "500" }],
        "18bold": ["18px", { fontWeight: "700" }],
        "20reg": ["20px", { fontWeight: "400" }],
        "20med": ["20px", { fontWeight: "500" }],
        "20semi": ["20px", { fontWeight: "600" }],
        "20bold": ["20px", { fontWeight: "700" }],
        "20extra": ["20px", { fontWeight: "800" }],
        "24med": ["24px", { fontWeight: "500" }],
        "24semi": ["24px", { fontWeight: "600" }],
        "24bold": ["24px", { fontWeight: "700" }],
        "26extra": ["26px", { fontWeight: "800" }],
        "28bold": ["28px", { fontWeight: "700" }],
        "32semi": ["32px", { fontWeight: "600" }],
        "32bold": ["32px", { fontWeight: "700" }],
        "36semi": ["36px", { fontWeight: "600" }],
        "36bold": ["36px", { fontWeight: "700" }],
        "40semi": ["40px", { fontWeight: "600" }],
        "40bold": ["40px", { fontWeight: "700" }],
        "48bold": ["48px", { fontWeight: "700" }],
        "48extra": ["48px", { fontWeight: "800" }],
        "62bold": ["62px", { fontWeight: "700" }],
        "64bold": ["64px", { fontWeight: "700" }],
        "64extra": ["64px", { fontWeight: "800" }],
        "70bold": ["70px", { fontWeight: "700" }],
      },
      colors: {
        white: "#FFFFFF",
        black: "#02170C",
        green: "#23921B",
        greenDark: "#195126",
        pink: "#F31260",
        grey: "#A1A1AA",
        greyDark: "#545454",
        red: "#C65528",
      },
      backgroundImage: {
        article:
          "linear-gradient(297.81deg, rgba(0, 0, 0, 0) 12.32%, rgba(0, 0, 0, 0.7) 83.61%)",
        discount:
          "linear-gradient(174.34deg, #062614 11.8%, #0A771C 61.48%, #21AA38 101.75%, #176023 159.11%, #06280C 190.68%)",
        discountText:
          "linear-gradient(89.73deg, #062614 1.83%, #0A771C 28.37%, #21AA38 49.89%, #176023 80.53%, #06280C 97.4%)",
      },
      boxShadow: { hero: "0px 2.25px 7.09px 0px #FFFFFF" },
      keyframes: {
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        rotation: "rotate 1600ms linear infinite",
      },
    },
  },
  plugins: [
    heroui(),
    tailwindScrollbar({
      nocompatible: true,
      preferredStrategy: "pseudoelements",
    }),
  ],
} satisfies Config;
