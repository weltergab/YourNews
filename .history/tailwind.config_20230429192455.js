/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/assets/blur-background.png)'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        black1: { //
          200: '#848DA0',
          300: '#C4C4C4',
          400: '#444B5B',
          500: '#0EE7B7',
          600: '#7AC7E3',
        },
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
          700: '#1B2138',
          900: '#11172B',//
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          400: '#f8fafc', //
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A',
        },
        test: {
          100: '#1A1E23',
          200: '#4A90E2',
          300: '#F2F2F2',
          400: '#222222',
          500: '#68CC7A',
          600: '#FF5B5B',
        },
        fav: {
          100: '#242D34', //desfocado twitter blue
          300: '#15202B', //twitter blue
          200: '#282A36', //vscode
          400: '#11172B', //meu portifolio
        },
        palette: {
          'btn': '#0E2A47', // botões principais, textos de destaque e links que precisam se destacar
          200: '#485B39', // botões secundários, elementos de navegação e detalhes que precisam se destacar sem serem tão intensos
          300: '#D8D8D8', // fundos dos elementos de conteúdo
          400: '#7A1E1E', // botões de ação destrutiva
          500: '#3B0D35', // cabeçalhos de seções importantes e títulos de página
          600: '#FFA400', // botões de ação positiva
          700: '#FFFFFF', // texto principal e o fundo de elementos de destaque
          800: '#A8A8A8', // bordas e elementos de divisão
        }
      },
    },
  },
  plugins: [],
}