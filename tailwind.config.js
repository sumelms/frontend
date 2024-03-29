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
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2A37',
      900: '#111928',
    },
    blue: {
      50: '#EBF5FF',
      100: '#E1EFFE',
      200: '#C3DDFD',
      300: '#A4CAFE',
      400: '#76A9FA',
      500: '#3F83F8',
      600: '#1C64F2',
      700: '#1A56DB',
      800: '#1E429F',
      900: '#233876',
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
    green: {
      50: '#F3FAF7',
      100: '#DEF7EC',
      200: '#BCF0DA',
      300: '#84E1BC',
      400: '#31C48D',
      500: '#0E9F6E',
      600: '#057A55',
      700: '#046C4E',
      800: '#03543F',
      900: '#014737',
    },
    teal: {
      50: '#C1F0F1',
      100: '#D5F5F6',
      200: '#8FE4E6',
      300: '#6EDBDF',
      400: '#4CD3D7',
      500: '#0694A2',
      600: '#26A8AC',
      700: '#1C7B7E',
      800: '#124E50',
      900: '#082122',
    },
    indigo: {
      50: '#F0F5FF',
      100: '#E5EDFF',
      200: '#CDDBFE',
      300: '#B4C6FC',
      400: '#8DA2FB',
      500: '#6875F5',
      600: '#5850EC',
      700: '#5145CD',
      800: '#42389D',
      900: '#362F78',
    },
    purple: {
      50: '#F6F5FF',
      100: '#EDEBFE',
      200: '#DCD7FE',
      300: '#CABFFD',
      400: '#AC94FA',
      500: '#9061F9',
      600: '#7E3AF2',
      700: '#6C2BD9',
      800: '#5521B5',
      900: '#4A1D96',
    },
    pink: {
      50: '#FDF2F8',
      100: '#FCE8F3',
      200: '#FAD1E8',
      300: '#F8B4D9',
      400: '#F17EB8',
      500: '#E74694',
      600: '#D61F69',
      700: '#BF125D',
      800: '#99154B',
      900: '#751A3D',
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
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('flowbite-typography')],
};
