import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderRadius: {
      'main': '0.5rem',
      'full': '50%',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        
          "color-primary": "var(--color-primary)",
          "color-primary-light": "var( --color-primary-light)",
          "color-secondary": "var(--color-secondary)",
          "btn-primary-bg": "var(--btn-primary-bg)",
          "btn-secondary-bg": "var(--btn-secondary-bg)",
          "btn-primary-text": "var(--btn-primary-text)",
          "btn-secondary-text": "var(--btn-secondary-text)",
          "card-primary-bg": "var(--card-primary-bg)",
          "card-secondary-bg": "var(--card-secondary-bg)",
          "color-title": "var(--text-color-title)",
          "color-subtitle": "var(--text-color-subtitle)",
          "shadow-color": "var(--shadow-color)",
          "grey-bg": "var(--grey-bg)"
     
      }
    },
  },
  plugins: [],
}
export default config
