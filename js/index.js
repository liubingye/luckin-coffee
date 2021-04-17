
$(function(){
	/* 
		函数让鼠标滑动到某个位置时出现
		opcity 0 -> 1
		top  position().top()-height  ->position().top()
	 */
	$('.floatups').map(function(){
		var oldTop = parseFloat($(this).css('top'))
		$(this).css({top:oldTop+130+'px',opacity:0})
	})
	
	function floatUp(obj,time,delaytime){
		// console.log(oldTop)
		obj.delay(delaytime).animate({
			top: 0,
			opacity:1
		},time)
	}
	$('.floatupq').map(function(){
		var oldTop = parseFloat($(this).css('top'))
		$(this).css({top:oldTop+20+'px',opacity:0})
		console.log($(this).css('top'))
	})
	function floatUpQuick(obj,delaytime){
		obj.delay(delaytime).animate({
			top: 0,
			opacity:1
		},500)
	}
	floatUp($('.floatup1'),1000,0)
	floatUp($('.floatup2'),1300,0)
	function fu(){
		var oldTop = parseFloat($('.floatup3').css('top'))
		$('.floatup3').css({top:oldTop+20+'px',opacity:0})
		$('.floatup3').animate({
			top: oldTop+'px',
			opacity:1
		},500)
	}
	fu()
	// floatup9
	$('.floatup9').map(function(){
		var oldTop = parseFloat($(this).css('top'))
		$(this).css({top:oldTop+603+'px'})
	})
	
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
	// 监听滚轮
	$(window).scroll(function(){
		scQuick($('.floatup4'),0)
		scSlow($('.floatup5'),1000,0)
		scSlow($('.floatup6'),1000,0)
		scQuick($('.floatup7'),0)
		scSlow($('.floatup8'),1000,0)
		if($(document).scrollTop() >= $('.floatup9').offset().top-$(window).height()){
			floatUp($('.floatup9'),1000,0)
		}
		scSlow($('.floatup10'),800,0)
		scSlow($('.floatup11'),800,0)
		scSlow($('.floatup12'),1000,0)
		scQuick($('.floatup13'),0)
	})
	// 监听鼠标
	
	// 点击切换
	var lock = true;
	$('.button-toleft').click(function(){
		if(lock){
			lock = false
			$('.shoeculture-content').map(function(){
				$(this).animate({left:$(this).position().left-650+'px'},800,function(){
					if($(this).position().left<-700){
						$(this).css('left','650px')
					}
					lock = true
				})
			})
		}
	})
	$('.button-toright').click(function(){
		if(lock){
			lock = false
			$('.shoeculture-content').map(function(){
				$(this).animate({left:$(this).position().left+650+'px'},800,function(){
					if($(this).position().left>700){
						$(this).css('left','-650px')
					}
					lock = true
				})
			})
		}
	})
})