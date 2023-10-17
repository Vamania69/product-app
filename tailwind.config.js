/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
      colors: {
        btn: {
          primary: "#673fbe",
        },
        dark: {
          primary: "#171421",
          secondary: "#1f1a2b",
        },
        card: {
          primary: "#3e2672 ",
          secondary: "#3c21771a",
        },
        border: {
          primary: "#b29ae680",
        },
      },
    },
  },
};
