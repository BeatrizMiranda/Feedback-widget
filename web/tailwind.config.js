module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996Dff',
          500: '#8257E5'
        },
        brandHover: {
          500: "#996DFF"
        }
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('tailwind-scrollbar')
  ],
}
