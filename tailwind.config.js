/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': ['12px', {
          lineHeight: '20px',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        },],
        'sm': ['14px', {
          lineHeight: '22px',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
        'md': ['16px', {
          lineHeight: '26px',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        }],
        'lg': ['18px', {
          lineHeight: '28px',
          fontWeight: '500',
        }],
        'xl': ['48px', {
          lineHeight: '60px',
          fontWeight: '700',
        }],
        'xxl': ['64px', {
          lineHeight: '80px',
          letterSpacing: '-0.04em',
          fontWeight: '700',
        },],
      },
      colors: {
        'primary': '#583FBC',
        'dark-primary': '#181945',
        'light-primary': '#7B55EC',
        'birch': '#DBEFFA',
        'yogurt': '#DBDEFA',
        'crimson': '#FADBE2',
        'dark-blue': '#181945',
        'light-pink': '#F6DBFA',
        'light-green': '#1FC073',
      },
    },
  },
  plugins: [],
}
