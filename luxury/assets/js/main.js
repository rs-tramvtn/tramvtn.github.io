$(document).ready(function () {
	$(".js-change-background").each(function(){
		//click select
		$(this).click(function(){
			$(this).parent().parent().siblings().find('.js-change-background').removeClass("active");
			$(this).toggleClass('active');
		});
		// select change value
		$(".js-change-background").on("change", function(e) {
			if(!$(this).is("select")) {
				if($(".js-change-background").hasClass('active')) {
					$(".js-change-background").removeClass('active');
				}
			}
		});
		
	});
	//click body change select
	$("body").on("click", function(e) {
		if(!$(e.target).is("select")) {
			if($(".js-change-background").hasClass("active")) {
				$(".js-change-background").removeClass("active");
			}
		}
	});
});