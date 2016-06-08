//On document load
jQuery(window).on("load", function($) {
	responsiveHeights();
	
});

//Resize Events
jQuery(window).resize(function() {
	responsiveHeights();
});

//Kick ass responsive height function
function responsiveHeights() {
    jQuery('.res-height-container').each(function() {
        jQuery(this).find('.res-height').height('auto');
        var startPoint = jQuery(this).attr('data-start-point');
        var endPoint = jQuery(this).attr('data-end-point');
        if (typeof startPoint == 'undefined') {
            startPoint = 768;
        }
        if (typeof endPoint == 'undefined') {
            endPoint = 5001;
        }
        if (jQuery(window).width() > startPoint && jQuery(window).width() < endPoint) {
            var highestBox = 0;
            jQuery(this).find('.res-height').each(function() {
                if (jQuery(this).height() > highestBox) {
                    highestBox = jQuery(this).height();
                }
            })
            jQuery(this).find('.res-height').height(highestBox);
        }
    });
}

//Test



