/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: "class",
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Menambahkan Inter sebagai font utama
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Menambahkan Inter sebagai font utama
      },
    },
  },
  plugins: [],
};
