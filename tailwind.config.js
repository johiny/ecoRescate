/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        ecoDarkGreen: "#40513B",
        ecoGreen: "#609966",
        ecoLightGreen: "#9DC08B",
        ecoWhite: "#EDF1D6"
      }
    },
  },
  plugins: [],
}
