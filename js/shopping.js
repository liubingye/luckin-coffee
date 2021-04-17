$(function(){
	$(window).mousemove(function(e){	
		var boxX = e.pageX-$('.inner-shopping-left').offset().left;
		var boxY = e.pageY-$('.inner-shopping-left').offset().top;
		var boxWidth = $('.inner-shopping-left').width();
		var boxHeight = $('.inner-shopping-left').height();
		var maskWidth = $('.shoppingmask').width();
		var maskHeight = $('.shoppingmask').height();
		// console.log(boxX,boxY)
		if(boxX>0 && boxX<boxWidth && boxY>0 && boxY<boxHeight){
			$('.shoppingmask').css('display','block')
			if(boxY-maskHeight/2 <=0){
				boxY = maskHeight/2;
			}
			if(boxX-maskWidth/2 <=0){
				boxX = maskWidth/2;
			}
			if(boxX>=boxWidth-maskWidth/2){
				boxX = boxWidth-maskWidth/2;
			}
			if(boxY>=boxHeight-maskHeight/2){
				boxY = boxHeight-maskHeight/2;
			}
			$('.shoppingmask').css({
				top: boxY-maskHeight/2+'px',
				left: boxX-maskWidth/2+'px'
			})
			// 判断mask不能超过box的范围
			
		}else{
			$('.shoppingmask').css('display','none')
		}
		var bgX = -boxX*(boxWidth/maskWidth)+300+'px';
		var bgY = -boxY*(boxHeight/maskHeight)+250+'px';
		// console.log(bgPosition)
		// bigBox.style.backgroundPosition = 'bgX+'px'';
		if(boxX>0 && boxX<boxWidth && boxY>0 && boxY<boxHeight){
			$('.shopping-hidden').css('display','block')
			$('.shopping-hidden').css('background-position',bgX+' '+bgY)
		}else{
			$('.shopping-hidden').css('display','none')
		}
	})
	// 背景图片数组
	var shoeBgArr = ['../imgs/shoe1.webp','../imgs/shoe2.webp','../imgs/shoe3.webp','../imgs/shoe21.webp','../imgs/shoe1.webp']
	// 设置颜色
	$('.shoecolor>ul>li').map(function(){
		// 点击切换class 属性 并且切换图片背景
		$(this).click(function(){
			var thisIndex = $(this).index()
			$(this).addClass('color-onindex').siblings().removeClass('color-onindex')
			$('.inner-shopping-left').css('background-image',`url(${shoeBgArr[thisIndex]})`)
			$('.shopping-hidden').css('background-image',`url(${shoeBgArr[thisIndex]})`)
		})
	})
	// 设置尺寸
	$('.shoesize>ul>li').map(function(){
		$(this).click(function(){
			$(this).addClass('size-onindex').siblings().removeClass('size-onindex')
		})
	})
	// 点击加减更改数量值
	$('.pushprice-button:eq(0)').click(function(){
		if(parseInt($('.pushprice-text').val())>0){
			$('.pushprice-text').val(parseInt($('.pushprice-text').val())-1)
		}
	})
	$('.pushprice-button:eq(1)').click(function(){
		$('.pushprice-text').val(parseInt($('.pushprice-text').val())+1)
	})
	// 点击shopnow-button弹出购物车,并且更改购物车信息
	$('.shopnow-button').on('click',function(){
		$('.float-shopcar-bg').css('display','block')
		$('.float-shopcar').css({'height':$(window).height(),display:'block'}).animate({
			width: '340px'
		},300)
	})
	
	
	// 点击背景隐藏购物车信息
	$('.float-shopcar-bg').on('click',function(){
		$('.float-shopcar').animate({
			width: 0
		},300,function(){
			$('.float-shopcar-bg').css('display','none')
			$('.float-shopcar').css('display','none')
		})
	})
	
})