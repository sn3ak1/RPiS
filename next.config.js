const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching: process.env.NODE_ENV === 'production' ? runtimeCaching : null,
  },
})