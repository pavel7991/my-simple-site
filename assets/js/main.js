$(document).ready(function(){
	$(".header-burger").click(function(){
		$(this).toggleClass('open');
    $(".mobile-menu-wrapper, .header-nav, html").toggleClass('open');
    $("html").toggleClass('hidden');
	});
});