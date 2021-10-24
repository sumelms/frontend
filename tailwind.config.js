module.exports = {
  // mode: "jit", // enabling Jist In Time Compiler engine
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  darkMode: 'class', // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        primary: '#3A3A3C'
      },
      textColor: {
        primary: '#3A3A3C'
      }
    },    
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      inset: ['checked'],
    },
  },
  plugins: [],
};
