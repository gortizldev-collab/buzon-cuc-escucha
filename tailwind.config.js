/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cuc: {
          red: '#A8001D',
          redHover: '#8A0018',
          dark: '#1E232A',
          grayBg: '#F8F9FA',
          accentYellow: '#E5A823',
        }
      }
    },
  },
  plugins: [],
}