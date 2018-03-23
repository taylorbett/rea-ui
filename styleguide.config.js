module.exports = {
    sections: [
        {
            name: 'Core',
            components: 'src/core/**/*.js',
        },
        {
            name: 'Modules',
            components: 'src/modules/**/*.js',
        },
    ],
    ignore: ['**/index.js'],
    styles: {
        StyleGuide: {
          '@global body': {
            fontFamily: 'Helvetica',
          }
        }
      }
  };