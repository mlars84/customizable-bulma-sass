# Customizable Bulma.io and Sass project
- This is a boilerplate setup for a bulma project with customizable Sass variables and an express server.

## Built With
- [bulma](https://bulma.io/), sass, html5, css3, node/express and yarn

## Getting Started
- $ yarn (or npm) install
- $ yarn (or npm) start
- To start customizing, simply reset any bulma [initial-variables](https://bulma.io/documentation/overview/variables/) in the `public/styles/main.scss` directory, above the line `@import '../vendors/bulma/bulma.sass';`. Then run 
- $ `sass public/styles/main.scss public/styles/main.css` 
  - to compile your changes into the `main.css` directory.
- Run 
- $ `sass public/styles/main.scss --watch` 
  - to continue editing and watch for changes as you go.

  ## A note on HSL colors
  - Bulma's colors are defined with HSL (Hue, Saturation, Light) as opposed to hex or rgb values. Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, 240 is blue. Values are specified with: `hsl(hue, saturation, lightness)`. [Here](https://www.w3schools.com/colors/colors_hsl.asp) is an HSL calculator.

  ## Acknowledgments 
  - [Jeremy Thomas](https://twitter.com/jgthms) for creating bulma.io.