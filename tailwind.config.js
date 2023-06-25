/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: ['cmyk'],
  },
  theme: {
    extend: {
      backgroundImage: {
        'hero-default': "url('/assets/images/hero/hero-vertical.jpg')",
        'hero-horizontal': "url('/assets/images/hero/hero-horizontal.avif')",
      },
      padding: {
        section: '7rem',
        page: '4rem',
      },
    },
  },
  plugins: [require('daisyui')],
};
