$(function(){
	$(".open").click(function(){
		$(".popup, .fixing-block").fadeIn("fast");
	});
    $(".popup-closer").click(function(){
        $(".popup, .fixing-block").fadeOut("fast");
    });
	$(".scrolling-content").slimscroll();
});