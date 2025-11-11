import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f7f7fb',
        accent: '#f5b041',
        ink: '#0f172a',
      },
    },
  },
  plugins: [],
};

export default config;




