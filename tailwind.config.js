module.exports = {
  darkMode:"class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ZonaThinFont:['ZonaThin',"sans-serif"],
        ZonaNormalFont:['ZonaNormal',"sans-serif"],
        ZonaSemiFont:['ZonaSemi',"sans-serif"],
        ZonaBoldFont:['ZonaBold',"sans-serif"],
      },
      colors: {
        'theme-blue': '#26a0f8',
        'theme-gray':'hsla(0,0%,100%,.5)',
        'theme-black':'#242424',
      },
      backgroundImage: {
        'hero-pattern': "url('https://ronasit.com/img/cases/page/dark/lainappi.webp')",
      }
    },
  },
  plugins: [],
}