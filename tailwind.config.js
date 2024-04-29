module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ZonaThinFont:['ZonaThin',"sans-serif"],
        ZonaNormalFont:['ZonaNormal',"sans-serif"],
        ZonaSemiFont:['ZonaSemi',"sans-serif"],
        ZonaBoldFont:['ZonaBold',"sans-serif"],
      }
    },
  },
  plugins: [],
}