import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['selector', 'html:has(input#dark-theme-switch:checked)'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', ...defaultTheme.fontFamily.sans],
        'indie-flower': ['Indie Flower', ...defaultTheme.fontFamily.sans],
        'meow-script': ['Meow Script', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'icon-skyblue': 'rgb(30, 156, 241)',
        'icon-lightGreen': 'rgb(0, 184, 122)',
        'icon-carmesi': 'rgb(249, 26, 130)',
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
    },
  },
  plugins: [],
};
