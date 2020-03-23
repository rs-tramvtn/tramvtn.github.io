$(document).ready(function () {
	$(".js-menu").each(function(){
	  $(this).find(".js-menu-icn").click(function(){
			  $(this).siblings(".js-menu-content").slideToggle(300);
			  $(this).toggleClass("open");
		  })
	  });
  
	  // scroll top button
	  $('.js-scrollToTop').on('click',function(){
		  var targetScroll = 0;
		  $("html,body").animate({
			  scrollTop : targetScroll
		  }, 300,'linear', function() {
		  });
	  });
	  $(window).scroll(function() {
	  if ($(this).scrollTop() > 100) {
		  $(".icn-arrow-top").fadeIn();
	  } else {
		  $(".icn-arrow-top").fadeOut();
	  }
  });
  
});