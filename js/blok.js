$(function(){
	// tab标签的切换
	// 获取每个li标签 点击之后切换
	$('.bloklist>ul>li').map(function(){
		$(this).click(function(){
			// console.log($(this).index())
			$(this).css('color','black').siblings().css('color','#999999')
			$('.innerblok>div').eq($(this).index()).addClass('bloks').siblings().removeClass('bloks')
			// index值对3取余  得到的值乘以100就是delay的延时参数
			$('.bloks>div').map(function(){
				var oldTop = parseFloat($(this).css('top'))
				$(this).css({top:oldTop+160+'px',opacity:0})
			})
			$('.bloks>div:lt(3)').map(function(){
				var delayNum = ($(this).index()%3)*200
				floatUp($(this),500,delayNum)
			})
			$(window).scroll(function(){
				$('.bloks>div:gt(2)').map(function(){
					var delayNum = ($(this).index()%3)*200
					floatUp($(this),500,delayNum)
				})
			})
		})
	
	})
	$('.bloks>div').map(function(){
		var oldTop = parseFloat($(this).css('top'))
		$(this).css({top:oldTop+130+'px',opacity:0})
	})
	$('.bloks>div:lt(3)').map(function(){
		var delayNum = ($(this).index()%3)*200
		floatUp($(this),500,delayNum)
	})
	$(window).scroll(function(){
		$('.bloks>div:gt(2)').map(function(){
			var delayNum = ($(this).index()%3)*200
			floatUp($(this),500,delayNum)
		})
	})
})