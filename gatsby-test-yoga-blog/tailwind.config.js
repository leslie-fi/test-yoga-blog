const {colors} = require('./src/styles/twStyles')
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ['Cooper Hewitt', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
      domine: ['Domine', 'serif'],
      cardo: ['Cardo', 'serif'],
      ch: ['Cooper Hewitt', 'sans-serif']
    }, 
    extend: {
      colors,
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
