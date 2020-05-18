const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./app/frontend/**/*.css", "./app/frontend/**/*.vue", "./app/views/**/*.html.erb", "./app/helpers/*.rb"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('tailwindcss')('./app/frontend/css/tailwind.js'),
    require('autoprefixer'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    }),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
}