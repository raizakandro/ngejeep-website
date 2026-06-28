import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#F0FDFA',
          600: '#0D9488',
          700: '#0F766E',
        },
        amber: {
          50: '#FFFBEB',
          600: '#F59E0B',
        },
      },
    },
  },
  plugins: [],
}
export default config