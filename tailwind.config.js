/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF8F5',
        foreground: '#1B1B1B',
        primary: {
          DEFAULT: '#6E8E59',
          50: '#F4F7F1',
          100: '#E8EFE3',
          200: '#D1DFC7',
          300: '#A8BE99',
          400: '#8FAD7E',
          500: '#6E8E59',
          600: '#5A7548',
          700: '#485E3A',
          800: '#3A4B30',
          900: '#2F3E26',
          950: '#1A2414',
        },
        muted: '#888888',
        secondary: '#656565',
        success: '#4C8C68',
        card: '#FFFFFF',
        section: '#F6F3EE',
        border: 'rgba(0, 0, 0, 0.06)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(0, 0, 0, 0.04), 0 4px 16px -4px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 4px 16px -4px rgba(0, 0, 0, 0.05), 0 8px 32px -8px rgba(0, 0, 0, 0.08)',
        'soft-xl': '0 8px 24px -8px rgba(0, 0, 0, 0.06), 0 16px 48px -16px rgba(0, 0, 0, 0.08)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      maxWidth: {
        '8xl': '1400px',
        '9xl': '1600px',
      },
    },
  },
  plugins: [],
}
