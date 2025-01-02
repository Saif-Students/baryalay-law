/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-bg-color)",
        "secondary-color": "var(--secondary-bg-color)",
        "accent-color": "var(--accent-color)",
        "text-light-color": "var(--text-color-light)",
        "dark-text-color": "var(--text-color-dark)",
      },
    },
  },
  plugins: [],
}

