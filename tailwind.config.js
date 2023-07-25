// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1270px',
    },
    extend: {
      fontFamily: {
        'rampart-one': ['Rampart One', 'sans-serif'],
        'graduate': ['Graduate'],
      },
      boxShadow:  {
        'light-neumorphism-2xl': '-12px -12px 24px rgba(255, 255, 255, 1), 12px 12px 24px rgba(206, 212, 219, 1)',
        'light-neumorphism-xl': '-9px -9px 18px rgba(255, 255, 255, 1), 9px 9px 18px rgba(200, 207, 216, 0.9)',
        'light-neumorphism-l': '  16px 16px 42px rgba(138, 138, 138, 1),-16px -16px 42px rgba(255, 255, 255, 1)',
        'light-inner-neumorphism-l': 'inset -2px -2px 4px rgba(255, 255, 255, 1), inset 2px 2px 4px rgba(200, 207, 216, 0.9)',
        'light-inner-neumorphism-xl': 'inset -4px -4px 8px rgba(255, 255, 255, 1), inset 4px 4px 8px rgba(200, 207, 216, 0.9)',
        'dark-neumorphism-2xl': '-12px -12px 24px rgba(46, 46, 46, 0.8), 12px 12px 24px rgba(11, 15, 26, 0.9)',
        'dark-neumorphism-xl': '-9px -9px 18px rgba(46, 46, 46, 0.4), 9px 9px 18px rgba(12, 15, 26, 0.6)',
        'dark-neumorphism-l': '-4px -4px 8px rgba(46, 46, 46, 0.4), 4px 4px 8px rgba(11, 15, 26, 0.6)',
        'dark-inner-neumorphism-l': 'inset -2px -2px 4px rgba(46, 46, 46, 0.8), inset 2px 2px 4px rgba(11, 15, 26, 0.9)',
        'dark-inner-neumorphism-xl': 'inset -4px -4px 8px rgba(46, 46, 46, 0.8), inset 4px 4px 8px rgba(11, 15, 26, 0.9)',
        },
      colors: {
        primary: '#212353',
        secondary: '#4B5D68',
        accent: {
          primary: '#9C69E2',
          primary_hover: '#9059DB',
          secondary: '#F063B8',
          secondary_hover: '#E350A9',
          tertiary: '#68C9BA',
        },
        
      },
      backgroundImage: {
        hero: "url('../src/assets/img/hero_bg.png')",
      },
      dropShadow: {
        primary: ' 0px 5px 5px rgba(75, 93, 104, 0.1)',
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(-100vw)' },
        },
      },
    },
  },
  plugins: [
   
  ],
}