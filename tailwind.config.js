module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [],
  theme: {
    extend: {},
    container: {
      // padding: {
      //   default: '1rem',
      //   sm: '2rem',
      //   lg: '4rem',
      //   xl: '5rem',
      // },
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      primary: '#1976D2',
      gray: {
        100: '#f7fafc',
        // ...
        900: '#1a202c',
      },
      background: '#2196F3',
      // ...
    },
    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      4: '4px',
    },
  },
  variants: {},
  plugins: [],
};
