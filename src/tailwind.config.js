/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          bodyFont: ['Montserrat', 'sans-serif'],
          titleFont: ['Russo One', 'sans-serif'],
        },
        screens: {
          xs: '320px',
          sm: '375px',
          sml: '500px',
          md: '667px',
          mdl: '768px',
          lg: '960px',
          lgl: '1024px',
          xl: '1280px',
          xxl: '1920px',
        },
  
        colors: {
          bodyColor: 'white',
          lightText: 'black',
          boxBg: 'linear-gradient(145deg, #1e2024, #23272b',
          designColor: '#a70101',
          navbarColor: '#ffffffdb',
          mobMenuColor: '#ffffffed',
        },
        boxShadow: {
          shadowOne: '10px 10px 19px #1cle22, -10px -10px 19px #262a2e',
        },
      },
    },
    plugins: [],
  };
  