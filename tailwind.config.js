/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

// Sumé Solutions Theme
const sume = {
  colors: {
    primary: {
      50: '#B8D6F2',
      100: '#A6CCEF',
      200: '#84B8E9',
      300: '#61A4E3',
      400: '#3E8FDD',
      500: '#247BCE',
      600: '#1E66AB',
      700: '#185289',
      800: '#123D66',
      900: '#0A2036',
    },
    teal: {
      50: '#C1F0F1',
      100: '#B0ECEE',
      200: '#8FE4E6',
      300: '#6EDBDF',
      400: '#4CD3D7',
      500: '#2DC9CD',
      600: '#26A8AC',
      700: '#1C7B7E',
      800: '#124E50',
      900: '#082122',
    },
    yellow: {
      50: '#FFFBEC',
      100: '#FFF6D7',
      200: '#FFEDAF',
      300: '#FFE386',
      400: '#FFDA5D',
      500: '#FFCD25',
      600: '#ECB600',
      700: '#B48B00',
      800: '#7C5F00',
      900: '#443400',
    },
    orange: {
      50: '#FFFDFB',
      100: '#FEF2E7',
      200: '#FDDDBF',
      300: '#FCC898',
      400: '#FAB370',
      500: '#F99E49',
      600: '#F78113',
      700: '#CB6607',
      800: '#954A05',
      900: '#5E2F03',
    },
    red: {
      50: '#FDE9EA',
      100: '#FCD7D7',
      200: '#F8B1B3',
      300: '#F58B8E',
      400: '#F26669',
      500: '#EF4044',
      600: '#E41318',
      700: '#B00F12',
      800: '#7C0A0D',
      900: '#490608',
    },
  },
};

module.exports = {
  content: ['node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', './public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ...colors,
        ...sume.colors,
        blue: sume.colors.primary,
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('flowbite-typography')],
};
