/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*.html", "./public/*.html"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
      },
      colors: {
        primary: {
          50:  '#FDE8E8',  // Lightened, soft red to match the intensity of 600
          100: '#FBCFCF',  // Soft pinkish-red for a smooth gradient transition
          200: '#F89F9F',  // More saturated but still lighter than the 300
          300: '#F66F6F',  // Harmonizes with the 200 and 400
          400: '#F14F4F',  // Slightly desaturated red to blend with 500
          500: '#EB2F2F',  // Vibrant red, blending into the more intense 600
          600: '#DB0401',  // Main red tone, bold and strong
          700: '#B30401',  // Darker and less saturated to match with 600
          800: '#8A0301',  // Deep, rich red for a smooth transition from 700
          900: '#6E0201',  // Darker and less intense, complements the 800
          950: '#590101'   // Darkest red, completing the palette
        },
        highlight: {
          600: '#0080DB' // Highlight remains the same for contrast
        },
        
     
        neutral: {
          50: '#F7F7F7',   // Very light neutral gray
          100: '#EDEDED',  // Light neutral gray
          200: '#D6D6D6',  // Light-medium neutral gray
          300: '#B8B8B8',  // Medium neutral gray
          400: '#989898',  // Medium-dark neutral gray
          500: '#7A7A7A',  // Dark neutral gray
          600: '#5F5F5F',  // Darker neutral gray
          700: '#4A4A4A',  // Even darker neutral gray
          800: '#303030',  // Very dark neutral gray
          900: '#262626',  // Almost black neutral gray
          950: '#1A1A1A'   // Almost black neutral gray
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif']
      }
    }
  },
  plugins: [],
}

