# BTP-Plotter-npm-package
 
## Installation
   npm -i btp-fn-plotter

## Instructions
   works with webpack4.
### Functions
1. drawFromPath( filepath, htmlTag ).
   Takes in two attributes json file path and the html tag to render it to.
   
2. drawFromData( javascript Object, htmlTag ).
   Takes in two attributes js object and the html tag to render it to.
   
3. getsvgdata(htmlTag).
   A function that can be attached to a button that gets the “snapshot” of the graph.

4. copydata(textarea Tag),
   A helper function that works with getsvgdata function to copy the svg data to your clipboard.