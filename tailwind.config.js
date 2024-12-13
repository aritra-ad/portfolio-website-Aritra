/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6', // Purple
        secondary: '#4F46E5', // Indigo
        accent: '#F471B5', // Pink
        background: {
          DEFAULT: '#0A0A0F',
          secondary: '#121218',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#94A3B8',
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'bounce-slow': 'bounce 3s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}
