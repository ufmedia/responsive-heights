
Using this script you can set all DIVs within a container to the same height, the height of the tallest. This has proved handy to us when building grids on responsive sites, especially within Bootstrap. It's very similar to a mosaic except instead of bunching everything up it preserves the row structure.

I have a feeling new CSS grid functions will replace the need for this, but it's handy for the moment.

Setup is easy, include the script.js file in your project and then add the class 'res-height-container' to the containing div and then the 'res-height' to each div within, the height of each of these will be inspected and adjusted so they are all the same.

