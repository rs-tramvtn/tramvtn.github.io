$(document).ready(function () {
	$(".js-change-background").on("click", function(e) {
		$(this).toggleClass('active');
	});
	$(".js-change-background").on("change", function(e) {
		$(this).removeClass('active');
		console.log("open select");
	});
	$("body").on("click", function(e) {
		if(!$(e.target).is("select")) {
			if($(".js-change-background").hasClass('active')) {
				$(".js-change-background").removeClass('active');
			}
		}
	});
});