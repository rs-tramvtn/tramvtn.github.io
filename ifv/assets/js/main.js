$(document).ready(function () {
  $(".js-menu").each(function(){
    $(this).find(".js-menu-icn").click(function(){
			$(this).siblings(".js-menu-content").slideToggle(300);
			$(this).toggleClass("open");
		})
	})
});