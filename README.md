# reveal-inline-svg
Automatically inlines SVG files in Reveal.js presentations.
Allows the application of fragments, animations etc. to SVG DOM elements.

## Installation
Just include `inline_svg.js` as a dependency of Reveal inside the `Reveal.initialize` function in your presentation's HTML file.
See `test.html` for an example.

## Usage
The script will replace any `object` element in your presentation with an SVG element of the included SVG file. In addition, you can apply any attribute to any SVG element in the SVG DOM using `param` elements.
Example:
```
<object type="image/svg+xml" data="drawing.svg">
  <param id="rect10" class="fragment" data-fragment-index="3">
</object>
```
This code will replace the `object` element with an SVG element using the SVG in `drawing.svg`. In addition it will add the `class="fragment" data-fragment-index="3"` attributes to `#rect10` inside the SVG DOM.

## Dependencies
The example presentation (`test.html`) uses Velocity.js to demonstrate animation of SVG elements.

