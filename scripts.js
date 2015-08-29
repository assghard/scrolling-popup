$(function(){
	$(".open").click(function(){
		$(".popup, .fixing-block").fadeIn("fast");
	});
    $(".popup-closer, .fixing-block").click(function(){
        $(".popup, .fixing-block").fadeOut("fast");
    });
	$(".scrolling-content").slimscroll();
});