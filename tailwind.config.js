/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#FFCFD2',
          deepRose: '#8E5963',
          darkRose: '#5A3941',
          softPink: '#FFF0F1',
          warmCream: '#FFF9F5',
          offWhite: '#FCFAF8',
          charcoal: '#292326',
          mutedGray: '#716A6D',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(41, 35, 38, 0.08)',
        'lift': '0 20px 40px -15px rgba(90, 57, 65, 0.12)',
        'card': '0 4px 20px -2px rgba(41, 35, 38, 0.05)',
      }
    },
  },
  plugins: [],
}
