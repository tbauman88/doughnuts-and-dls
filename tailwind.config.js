const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./apps/web/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      visibility: ['hover', 'focus', 'group-hover'],
      display: ['hover', 'focus', 'group-hover']
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
