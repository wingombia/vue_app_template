# README

A template for a 5.2.4.3 rails + vue + typescript + tailwind app with eslint, postcss, webpack and babel, postgresql.

## Setup process
1. `rails new` with postgres and webpack vue options and no asset pipeline, then modify database usn/pwd config, add erb loader to webpacker.
2. Add an erb index file that import all needed static assets for webpacker, import a few core rails js libraries to application.js to migrate from asset pipeline.
3. Setup tailwind with postcss (purgecss and autoprefixer). Use `tailwind init` in `app/javascript/css`, import tailwind library in `application.css` then import it in `packs/application.js`.
4. Add typescript using webpacker and vue-shims to integrate with vue.
5. Add eslint using `eslint init`, add required eslint-plugin to help use it with ts and vue.
6. Config alias path mapping for webpacker, tsconfig and eslint.


