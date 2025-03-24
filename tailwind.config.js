/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7ec7fc',
          400: '#39a7f8',
          500: '#0e8aeb',
          600: '#0266c9',
          700: '#0553a3',
          800: '#0a4686',
          900: '#0d3c6f',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d2dae7',
          300: '#a4b7d0',
          400: '#7590b5',
          500: '#52719b',
          600: '#3e577d',
          700: '#344867',
          800: '#2d3c55',
          900: '#283348',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
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
          }
        }
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            code: {
              color: theme('colors.gray.900'),
              backgroundColor: theme('colors.gray.100'),
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code:not(pre code)': {
              fontSize: '85%',
            },
            pre: {
              color: theme('colors.gray.200'),
              backgroundColor: theme('colors.gray.800'),
              lineHeight: '1.75',
              padding: theme('spacing.4'),
              borderRadius: theme('borderRadius.lg'),
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderWidth: '0',
              padding: '0',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            code: {
              color: theme('colors.gray.100'),
              backgroundColor: theme('colors.gray.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
