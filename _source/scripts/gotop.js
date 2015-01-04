
function getScrollTop(){
	h = $(window).height();
	t = $(document).scrollTop();
	if(t > h){
		$('#gotop').show();
	}else{
		$('#gotop').hide();
	}
}

$(function(e) {

	//返回顶部
	getScrollTop();
	$('#gotop').click(function(){
		$(document).scrollTop(0);
	});

});

$(window).scroll(function(e){
	getScrollTop();
});
