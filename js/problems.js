$(function(){
	$('.problem-title').map(function(){
		$(this).click(function(){
			$(this).parent().find('.problem-content').slideToggle('slow')
		})
	})
})