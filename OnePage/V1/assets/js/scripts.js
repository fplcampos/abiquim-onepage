$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	// console.log(scroll);
	if (scroll >= 1) {
		$(".menu").addClass("ativo fixed-top");
	} else {
		$(".menu").removeClass("ativo fixed-top");
		$(".menu ul li").removeClass("active");
	}
});


(function ($) {
	"use strict";
	smartScroll.init({
		speed: 1200, // default 500
		addActive: true, // default true
		activeClass: "active", // default active
		offset: 114.55 // default 100
	}, function () {
		console.log("callback");
	});
})(jQuery);

$("a[href='#top']").click(function() {
	$("html, body").animate({ scrollTop: 0 }, 1000);
	return false;
});

/*--------------------------------
  Swap video with autoplay video
---------------------------------*/

function autoPlayVideo(vcode, width, height){
  "use strict";
  $("#videoContainer").html('<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+vcode+'?autoplay=1" allow="autoplay" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
}

jQuery('a.introVid').click(function(){
	jQuery(this).hide();
	jQuery('#videoContainer').show();
	autoPlayVideo('hJDtjKLKW-Y','100%','100%');
});

$("a[href='#show']").click(function() {
	$(".hide").fadeIn("fast");
	$(this).fadeOut("fast");
});

$('#checkbox-menu').click(function(){
	if( $(this).is(":checked") == true ){
		$('.resp, .menu-resp').addClass('ativo');
	}else{
		$('.resp, .menu-resp').removeClass('ativo');
	}
});

$('.menu-resp a').click(function(){
	$('#checkbox-menu').delay(2000).prop('checked', false);
	$('.resp, .menu-resp').delay(2000).removeClass('ativo');
});