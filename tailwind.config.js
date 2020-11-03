module.exports = {
  purge: {
    options: {
      whitelistPatterns: [/el-/]
    },
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js']
  },
  theme: {
    colors: {
      orange: '#f79820',
      blue: '#298cd1',
      white: 'white',
      grey: '#A3AEBF',
      darkGrey: '#5A6E8B',
      borderGrey: '#DDE6EE',
      lightGrey: '#FAFAFA'
    },
    extend: {
      spacing: {
        60: '60px'
      },
      height: {
        nav: '60px',
        movieCard: '550px',
        emptyImage: '420px'
      },
      maxHeight: {
        movieCard: '600px'
      },
      maxWidth: {
        block: '600px'
      }
    }
  },
  variants: {
    margin: ['first', 'last', 'responsive'],
    padding: ['first', 'last', 'responsive']
  },
  plugins: []
}
