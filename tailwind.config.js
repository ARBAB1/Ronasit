module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1440px',
      },
    },
    screens: {
      xs: "360px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1600px",
    },
    
    extend: {
      fontFamily: {
        ZonaThinFont: ['ZonaThin', "sans-serif"],
        ZonaNormalFont: ['ZonaNormal', "sans-serif"],
        ZonaSemiFont: ['ZonaSemi', "sans-serif"],
        ZonaBoldFont: ['ZonaBold', "sans-serif"],
      },
      colors: {
        'theme-blue': '#26a0f8',
        'theme-gray': 'hsla(0,0%,100%,.5)',
        'theme-black': '#242424',
      },
      backgroundImage: {
        'hero-pattern': "url('https://ronasit.com/img/cases/page/dark/lainappi.webp')",
      }
    },
  },
  plugins: [],
}