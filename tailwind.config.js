/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,tsx}",
    "./src/components/*.{js, jsx}"
  ],
  "darkMode" : 'class',
  theme: {
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

