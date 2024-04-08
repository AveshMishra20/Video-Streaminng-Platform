/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({addUtilities}){
      const newUtilities={
        ".no-scrollbar::-webkit-scrollbar":{
          display:"none"
        }
      };
      addUtilities(newUtilities);
    },
    
  ],
}

