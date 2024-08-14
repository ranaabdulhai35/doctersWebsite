/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
   borderRadius : {
    custombr : 
   ' 52% 48% 53% 47% / 71% 65% 35% 29%' 
    
   },
   backgroundImage : {
vector : './assits/Vectorvector.png'
   }
    },
  },
  plugins: [],
}
