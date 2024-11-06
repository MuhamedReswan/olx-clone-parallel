/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",          // Ensure Tailwind scans the root HTML file
    "./src/**/*.{js,jsx}",    // Include all JS and JSX files within the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
