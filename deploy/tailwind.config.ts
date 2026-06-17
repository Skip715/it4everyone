import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A1F44',
        'navy-dark': '#06142E',
        'navy-deeper': '#050E22',
        blue: '#1565C0',
        'blue-mid': '#1976D2',
        'blue-light': '#42A5F5',
        sky: '#5BA4D4',
        'sky-muted': '#8EBADF',
        pale: '#EAF2FB',
        'pale-2': '#F0F6FF',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateX(2deg)' },
          '50%': { transform: 'translateY(-18px) rotateX(2deg)' },
        },
        pulse_orb: {
          '0%, 100%': { transform: 'translateY(-50%) scale(1)', opacity: '0.7' },
          '50%': { transform: 'translateY(-50%) scale(1.08)', opacity: '1' },
        },
        chip1: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        chip2: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        chip3: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        growBar: {
          '0%': { height: '4px' },
          '100%': { height: 'var(--bar-h)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        pulse_orb: 'pulse_orb 4s ease-in-out infinite',
        chip1: 'chip1 6s ease-in-out infinite',
        chip2: 'chip2 7s ease-in-out infinite',
        chip3: 'chip3 5.5s ease-in-out infinite',
        slideIn: 'slideIn 0.6s ease forwards',
        fadeIn: 'fadeIn 0.4s ease forwards',
      },
    },
  },
  plugins: [],
}
export default config
