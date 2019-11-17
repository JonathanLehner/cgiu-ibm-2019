if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({
    path: require('path').resolve(process.cwd(), '../.env')
  })
}

// doesnt work
// const withCSS = require('@zeit/next-css')
// SyntaxError: Unexpected token *
// /Users/jonathanlehner/freelance/hackathons/cgi-ibm/object-detection/app/node_modules/
// cloud-annotations/object-detection/src/index.js:1

const withImages = require('next-images')
const withTM = require('next-transpile-modules')

module.exports = withTM(
  withImages({
    webpack(config, options) {
      return config
    },
    transpileModules: ['@cloud-annotations/object-detection'],
    env: {
      API_URL: process.env.API_URL || '/api'
    }
  })
)
