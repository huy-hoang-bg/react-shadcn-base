import tailwindCssAnimate from 'tailwindcss-animate'
import { fontFamily } from 'tailwindcss/defaultTheme'
import { fonts } from './src/config/fonts'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  safelist: fonts.map((font) => `font-${font}`),
  theme: {
    container: {
      center: 'true',
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        inter: ['Inter', ...fontFamily.sans],
        manrope: ['Manrope', ...fontFamily.sans],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #0096AD 0%, #23C78E 100%)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          '25': '#FCFAFF',
          '50': '#F9F5FF',
          '100': '#F4EBFF',
          '200': '#E9D7FE',
          '300': '#42CEE3',
          '400': '#00B5D1',
          '500': '#0096AD',
          '600': '#7F56D9',
          '700': '#006D7D',
          '800': '#53389E',
          '900': '#42307D',
          '950': '#2C1C5F',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        gray: {
          '25': '#FDFDFD',
          '50': '#FAFAFA',
          '100': '#F5F5F5',
          '200': '#E9EAEB',
          '300': '#D5D7DA',
          '400': '#A4A7AE',
          '500': '#717680',
          '600': '#535862',
          '700': '#414651',
          '800': '#252B37',
          '900': '#181D27',
          '950': '#0A0D12',
          inactive: '#9D9D9D',
          inactive2: '#C3C3C3',
        },
        'gray-brand': {
          '25': '#FDFDFD',
          '50': '#F9FAFB',
          '100': '#EFF3F5',
          '200': '#DCE5EA',
          '300': '#B9CBD4',
          '400': '#7D9FB0',
          '500': '#5D8498',
          '600': '#4A6978',
          '700': '#405B68',
          '800': '#30454F',
          '900': '#111322',
          '950': '#0E171B',
        },
      },
      boxShadow: {
        'admin-sidebar': '2px 0px 20px 0px #00000026'
      }
    },
  },
  plugins: [tailwindCssAnimate],
}
