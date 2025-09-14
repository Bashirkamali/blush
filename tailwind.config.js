/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fef7f9',
          100: '#fdf0f4',
          200: '#fbe1e9',
          300: '#f8c9d7',
          400: '#f4a5c0',
          500: '#f6d6e5', // Main blush pink
          600: '#e85a8a',
          700: '#d13d6b',
          800: '#b03257',
          900: '#922b4a',
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        ink: '#111827',
        stone: '#374151',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'bloom': 'bloom 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bloom: {
          '0%': { transform: 'scale(1)', filter: 'brightness(1)' },
          '100%': { transform: 'scale(1.05)', filter: 'brightness(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.08)',
      },
      borderRadius: {
        '2xl': '1.25rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // RTL Support
      textAlign: {
        'start': 'start',
        'end': 'end',
      },
      // Accessibility utilities
      screens: {
        'motion-reduce': {'raw': '(prefers-reduced-motion: reduce)'},
      },
    },
  },
  plugins: [],
}

