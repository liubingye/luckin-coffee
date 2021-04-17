function floatUp(obj,time,delaytime){
		// console.log(oldTop)
		obj.delay(delaytime).animate({
			top: 0,
			opacity:1
		},time)
}
function floatUpQuick(obj,delaytime){
		obj.delay(delaytime).animate({
			top: 0,
			opacity:1
		},500)
}
function scQuick(obj,delaytime){
	if($(document).scrollTop() >= obj.offset().top-$(window).height()+obj.height()/2){
		floatUpQuick(obj,delaytime)
	}
}
function scSlow(obj,time,delaytime){
	if($(document).scrollTop() >= obj.offset().top-$(window).height()+obj.height()/3){
		floatUp(obj,time,delaytime)
	}
}