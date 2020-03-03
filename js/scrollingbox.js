
$(function() {
	// Set this variable with the height of your sidebar + header
	var offsetPixels = 400; 

	$(window).scroll(function() {
		if ($(window).scrollTop() > offsetPixels) {
			$( ".scrollingBox" ).css({
				"position": "fixed",
				"top": "15px"
			});
		} else {
			$( ".scrollingBox" ).css({
				"position": "static"
			});
		}
	});
});