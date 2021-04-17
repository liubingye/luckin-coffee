$(function(){
	// 绑定点击事件
	var divIndex;
	var num;
	$('.frindes>div').map(function(){
		$(this).find('img').click(function(){
			var screenheight = $(window).height();
			// console.log(screenheight);
			$('.aboutmask').animate({height:screenheight+'px'},400,function(){
				console.log($('.aboutmask').css('height'))
			}).css('display','block')
			// console.log($(this).parent().index())
			// 根据点击的哪一张图片使里面的图片对应
			// 获取到index()值
			divIndex = $(this).parent().index()
			num = divIndex
			$('.imgs>li').eq(divIndex).css('opacity',1)
		})
		
	})
	$('.maskhead>div').click(function(){
		$('.aboutmask').animate({height:0},1000,function(){
			$('.aboutmask').css('display','none')
			
		})
	})
	// 封装函数轮播
	// 向右
	function isBig(a){
		if(a>5){
			a = 0;
		}
		return a;
	}
	function isSmall(a){
		if(a<0){
			a = 5;
		}
		return a;
	}
	function goForWard(){
		num++;
		num = isBig(num);
		$('.imgs>li').eq(num).animate({opacity:1},500).siblings().css('opacity',0)
		// console.log(num)
	}
	// 向左
	function goBackWard(){
		num--;
		num = isSmall(num);
		$('.imgs>li').eq(num).animate({opacity:1},500).siblings().css('opacity',0)
	}
	
	
	$('.forward>img').click(function(){
		console.log('点击')
		goForWard()
	})
	$('.backward>img').click(function(){
		console.log('点击')
		goBackWard()
	})
	// 绑定移入移出事件
	$('.maskfooter>img').map(function(){
		$(this).mouseenter(function(){
			$(this).stop().animate({height:'79.5px',width:'79.5px',margin:'-26.5px 0 0 0'},200,'swing')
		})
		$(this).mouseleave(function(){
			$(this).stop().animate({height:'53px',width:'53px',margin:'0'},800,'linear')
		})
		$(this).click(function(){
			num = $(this).index()
			$('.imgs>li').eq(num).animate({opacity:1},500).siblings().css('opacity',0)
		})
	})
	
})