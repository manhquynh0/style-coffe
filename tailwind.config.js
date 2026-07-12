/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Karla : ['Karla','sans-serif']
      },
    colors: {
        ManhQuynhDev: "#00FF00",
      },
     keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
      },
      animation: {
        'slide-in-left': 'slideInLeft 0.3s ease-out forwards',
        'slide-out-left': 'slideOutLeft 0.3s ease-in forwards',
      },
      backgroundImage : {
        bgcoffe : "url('./img/coffe.png')"
      }
    
    },
  },
  plugins: [],
}

