const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '..', '..', 'app/frontend/'),
      '@components': path.resolve(__dirname, '..', '..', 'app/frontend/components'),
    },
  },
};
