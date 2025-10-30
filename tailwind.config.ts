import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-background': '#10b981',
        'primary-foreground': '#ffffff',
        'primary-dark': '#059669',
        'primary-light': '#34d399',
        'secondary-background': '#f3f4f6',
        'secondary-foreground': '#111827',
        'secondary-light': '#e5e7eb',
        'secondary-dark': '#9ca3af',
        'accent-emerald': '#10b981',
        'accent-red': '#ef4444',
        'accent-blue': '#3b82f6',
        'accent-purple': '#a855f7',
        'accent-orange': '#f97316',
        'background-success': '#d1fae5',
        'background-secondary': '#f3f4f6',
        'background-blue': '#dbeafe',
        'background-red': '#fee2e2',
        'background-purple': '#f3e8ff',
        'background-gray': '#e5e7eb',
        'background-divider': '#d1d5db',
        'text-success': '#059669',
        'text-primary': '#111827',
        'input-background': '#ffffff',
        'input-text': '#111827',
        'header-background': '#ffffff',
        'header-text': '#111827',
        'border-success': '#a7f3d0',
        'border-primary': '#e5e7eb',
        'table-header': '#f9fafb',
      },
      borderRadius: {
        'base': '8px',
        '2xl': '16px',
        '3xl': '20px',
        '5xl': '24px',
        '6xl': '32px',
        'xs': '4px',
      },
      fontSize: {
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
      },
      lineHeight: {
        'base': '20px',
        'lg': '22px',
        'xl': '24px',
        '2xl': '29px',
        '3xl': '36px',
      },
    },
  },
  plugins: [],
}
export default config

