# Responsive Heights

Using this script you can set all DIVs within a container to the same height, the height of the tallest. This has proved handy to us when building grids on responsive sites

Setup 

1) Include the script in your project

2) Add the 'res-height-container' class to the div which contains your grid items (a row for example in Bootstrap)

3) Give each grid item the class of 'res-height' (a col-md-3 for example in Bootstrap)

4) (Optional) You can give a grid item the class of 'res-height-child' instead of 'res-height' which will mean it is exempt from being included in the 'which box is highest' calculation. It will still however be set to the calculated tallest of the 'res-height' divs. As such, this can be used to shrink an item, I've used it to reign in iframes and alike but appreciate only rarely would you need to use this.

5) (Optional) You can give a grid item an additional class of ‘res-height-master’ which will mean that div has its height factored into the ‘which box is highest’ calculation but won’t then have its height changed should there be another div taller. I’m not quite sure when this will be useful, but it’s in there anyway. 

6) There are then two optional data attributes than can be applied:
data-start-point & data-end-point

The script will only function between these two break points, ie window with in px. The default values are 781 & 5001 respectively.
