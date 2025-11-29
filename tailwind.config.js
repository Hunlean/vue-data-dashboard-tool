import daisyui from 'daisyui';
import forms from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#4A90E2',
          dark: '#357ABD',
        },
        secondary: {
          DEFAULT: '#7B68EE',
          light: '#9370DB',
        },
        accent: {
          DEFAULT: '#50E3C2',
        },
        neutral: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        base: {
          100: '#FFFFFF',
          200: '#F9FAFB',
          300: '#F3F4F6',
        },
      },
    },
  },
  plugins: [daisyui, forms],
  daisyui: {
    themes: ["light"],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
