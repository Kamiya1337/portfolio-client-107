/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#fafaf5',
        surface: '#fafaf5',
        ivory: '#fafaf5',
        paper: '#ffffff',
        charcoal: '#1a1c19',
        obsidian: '#1a1c19',
        primary: '#271310',
        secondary: '#6f5a52',
        tertiary: '#1d1815',
        taupe: '#fadcd2',
        beige: '#e3beb8',
        'muted-dark': '#504442',
        'muted-light': '#f1f1ec',
        'surface-dim': '#dadad5',
        'surface-low': '#f4f4ef',
        'surface-container': '#eeeee9',
        'surface-high': '#e8e8e3',
        'surface-highest': '#e3e3de',
        'secondary-container': '#fadcd2',
        'primary-mint': '#ece0dc',
        'secondary-lavender': '#fadcd2',
        'tertiary-blue': '#745853',
        outline: '#827472',
        'border-light': 'rgba(62, 39, 35, 0.1)',
        'border-dark': 'rgba(255, 255, 255, 0.35)',
      },
      fontFamily: {
        sans: ['DM Sans', 'Be Vietnam Pro', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Libre Caslon Text', 'Georgia', 'serif'],
      },
      spacing: {
        sidebar: '280px',
        'section-gap': '5rem',
      },
      borderRadius: {
        glass: '1.5rem',
        'glass-lg': '2rem',
      },
      boxShadow: {
        glass: 'inset 0 1px 1px rgba(255,255,255,0.72), 0 30px 60px rgba(62,39,35,0.04)',
        glow: '0 28px 80px rgba(62,39,35,0.08)',
      },
    },
  },
  plugins: [],
};
