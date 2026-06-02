import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        gold: '#c9a84c',
        'gold-light': '#e2c17a',
        'gold-dark': '#a8872e',
        dark: '#2d2d2d',
        'dark-2': '#555555',
        'dark-3': '#777777',
        light: '#fafafa',
        'light-2': '#f5f0e8',
        'light-3': '#f0ece4',
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
export default config
