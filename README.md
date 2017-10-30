# Customizable Bulma.io and Sass project
- This is a boilerplate setup for a bulma project with customizable Sass variables and an express server.

## Built With
- [bulma](https://bulma.io/), sass, html5, css3, node/express and yarn

## Getting Started
- $ yarn install
- $ yarn start
- To start customizing, simply reset any bulma [initial-variables](https://bulma.io/documentation/overview/variables/) in the `public/styles/main.scss` directory, above the line `@import '../vendors/bulma/bulma.sass';`. Then run 
- $ `sass public/styles/main.scss public/styles/main.css` 
  - to compile your changes into the `main.css` directory.
- Run 
- $ `sass public/styles/main.scss --watch` 
  - to continue editing and watch for changes as you go.