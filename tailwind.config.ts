import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#240237',
        gold: '#FF9933',
        sand: '#FFF7E6',
        'light-gray': '#3E075E',
        'extra-light-gray': '#ffffff',
      },
      fontFamily: {
        sans: ['Effra', 'Neue Haas Grotesk Display', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      maxWidth: {
        'content': '1440px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(.35, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}
export default config
