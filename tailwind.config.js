/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-bottom": {
          "0%": { transform: "translateY(-200px)" },
          "100%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "slide-bottom": "slide-bottom 1s linear both",
      },
    },
    screens: {
      'sm': '640px',
      
      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },

  },
  plugins: [],
}

